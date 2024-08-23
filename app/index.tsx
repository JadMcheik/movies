import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/movies")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
    
        });
    }, []);


    return (  


<View>

<FlatList  



/>


</View>


    );
}
 
export default Home;