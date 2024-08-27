import { FlatList, View } from "react-native";
import ListImage from "./ListImage";
import { Link } from "expo-router";

const HorizontalFlatList = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: "/details",
            params: { id: item.id },
          }}
        >
          <ListImage
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
        </Link>
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HorizontalFlatList;
