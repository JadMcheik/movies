import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BackArrow from "../assets/svg-images/BackArrow";

const BackArrowHeader = ({href}) => {
    return ( 

<View style={styles.backArrowView}>
        <Link href={href} asChild>
          <TouchableOpacity>
            <BackArrow />
          </TouchableOpacity>
        </Link>
      </View>


     );
}
 
export default BackArrowHeader;
const styles=StyleSheet.create({


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
