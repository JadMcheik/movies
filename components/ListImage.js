import { Image, StyleSheet } from "react-native";

const ListImage = ({ source }) => {
  return <Image source={source} style={styles.listImage} />;
};

export default ListImage;

const styles = StyleSheet.create({
  listImage: {
    width: 110,
    height: 180,
    objectFit: "cover",
    borderRadius: 15,
  },
});
