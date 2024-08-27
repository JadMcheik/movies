import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width: screenWidth } = Dimensions.get("window");
const CarouselAutoScroll = ({ datas }) => {
  const flatListRef = useRef(null);
  const indexRef = useRef(0);
  const [dataCount, setDataCount] = useState(datas.length);

  useEffect(() => {
    setDataCount(datas.length);
    indexRef.current = 0;
  }, [datas]);

  useEffect(() => {
    if (dataCount <= 0) return;

    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % dataCount;
      try {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: indexRef.current,
        });
      } catch (error) {
        console.error("Scroll error: ", error);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [dataCount]);

  return (
    <FlatList
      ref={flatListRef}
      data={datas}
      keyExtractor={(item) => item.id.toString()} // Ensure keyExtractor returns a string
      horizontal
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={styles.image}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    height: 350,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
});

export default CarouselAutoScroll;
