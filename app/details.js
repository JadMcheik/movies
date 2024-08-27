import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import BackArrow from "../assets/svg-images/BackArrow";
import BackArrowHeader from "../components/BackArrowHeader";
import PlayVideo from "../assets/svg-images/PlayVideo";

const { width: screenWidth } = Dimensions.get("window");
const details = () => {
  const [movie, setMovie] = useState({});
  const params = useLocalSearchParams();
  const { id } = params;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=77b9ae4b3e48759ebaf5c4e03093ebbc`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <View style={styles.details}>
      <BackArrowHeader href="/" />

      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.movieImage}
      />
      <TouchableOpacity style={styles.playVideoView}>
      
          <PlayVideo/>
     
      </TouchableOpacity>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <View style={styles.movieGenres}>
        {movie.genres
          ? movie.genres.map((item) => <Text key={item.id}>{item.name}</Text>)
          : null}
      </View>
      <View style={styles.movieReviewsView}>
        <StarRatingDisplay
          rating={movie.vote_average / 2}
          starSize={32}
          style={styles.rating}
        />
      </View>
      <Text style={styles.movieOverview}> {movie.overview}</Text>
      <View style={styles.movieReleaseDateView}>
        <Text style={styles.movieReleaseDate}>
          Release Date : {movie.release_date}
        </Text>
      </View>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({
  details: {
    rowGap: 15,
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  movieImage: {
    width: screenWidth,
    height: 350,
    objectFit: "fill",
  },
  playVideoView: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop:-40,
  
  },
  movieTitle: {
    textAlign: "center",

    fontWeight: "bold",
    fontSize: 20,
  },
  movieGenres: {
    flexDirection: "row",
    columnGap: 10,
  },
  rating: {
    alignItems: "center",
    justifyContent: "center",
  },

  movieOverview: {
    textAlign: "center",

    paddingHorizontal: 10,
  },

  movieReleaseDateView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  movieReleaseDate: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
