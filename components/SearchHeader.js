import { StyleSheet, View } from "react-native";
import MIcon from "../assets/svg-images/MIcon";
import SearchIcon from "../assets/svg-images/SearchIcon";
import { Link } from "expo-router";

const SearchHeader = ({href}) => {
  return (
    <View style={styles.header}>
      <MIcon />
     <Link href={href}><SearchIcon /></Link> 
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    position: "absolute",
    marginTop: 50,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
