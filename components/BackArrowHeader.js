import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BackArrow from "../assets/svg-images/BackArrow";
import { useNavigation } from "@react-navigation/native";
const BackArrowHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.backArrowView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow {...props} />
      </TouchableOpacity>
    </View>
  );
};

export default BackArrowHeader;
const styles = StyleSheet.create({
  backArrowView: {
    position: "absolute",
    marginTop: 50,
    marginLeft: 20,
    alignSelf: "flex-start",
    zIndex: 3,

    width: 40,
    height: 40,
  },
});
