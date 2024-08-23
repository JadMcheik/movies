import { Image, StyleSheet } from "react-native";

const SearchImage = ({ source }) => {
  return <Image source={source} style={styles.SearchImage} />;
};

export default SearchImage;

const styles = StyleSheet.create({
  SearchImage: {
    width: 126,
    height: 170,
    objectFit: "cover",
  },
});
