import { StyleSheet, Text, View } from "react-native";
import HorizontalFlatList from "./HorizontalFlatList";

const MoviesSection = ({ sectionTitle, SectionMovies }) => {
  return (
    <View style={styles.MoviesSection}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <HorizontalFlatList data={SectionMovies} />
    </View>
  );
};

export default MoviesSection;

const styles = StyleSheet.create({
  MoviesSection: {
    rowGap: 15,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
