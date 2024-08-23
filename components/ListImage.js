import { Image, StyleSheet } from "react-native";

const ListImage = ({source}) => {
    return ( 


<Image source={source} style={styles.listImage}/>

     );
}
 
export default ListImage;

const styles=StyleSheet.create({


listImage:{
width:80,
height:130,
objectFit:'cover',



},



});
