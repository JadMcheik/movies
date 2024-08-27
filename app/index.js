import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ListImage from "../components/ListImage";
import HorizontalFlatList from "../components/HorizontalFlatList";
import MoviesSection from "../components/MoviesSection";
import CarouselAutoScroll from "../components/CarouselAutoScroll";
import SearchIcon from "../assets/svg-images/SearchIcon";
import MIcon from "../assets/svg-images/MIcon";
import SearchHeader from "../components/SearchHeader";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);

  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=77b9ae4b3e48759ebaf5c4e03093ebbc"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularMovies(data.results);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=77b9ae4b3e48759ebaf5c4e03093ebbc"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUpcomingMovies(data.results);
      });

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=77b9ae4b3e48759ebaf5c4e03093ebbc&with_genres=99"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDocumentaryMovies(data.results);
      });

    setLoaded(true);
  }, []);

  const MoviesSections = [
    {
      sectionTitle: "Popular Movies",
      SectionMovies: popularMovies,
    },
    {
      sectionTitle: "Upcoming Movies",
      SectionMovies: UpcomingMovies,
    },

    {
      sectionTitle: "Documentary Movies",
      SectionMovies: documentaryMovies,
    },
  ];

  return (
    <View>
      <SearchHeader href="/search" />
      <ScrollView style={styles.HomeScrollView}>
        <CarouselAutoScroll datas={documentaryMovies} />

        <MoviesSection
          sectionTitle="Popular Movies"
          SectionMovies={popularMovies}
        />
        <MoviesSection
          sectionTitle="Upcoming Movies"
          SectionMovies={UpcomingMovies}
        />

        <MoviesSection
          sectionTitle="Documentary Movies"
          SectionMovies={documentaryMovies}
        />
        <MoviesSection
          sectionTitle="Popular Movies"
          SectionMovies={popularMovies}
        />
        <MoviesSection
          sectionTitle="Upcoming Movies"
          SectionMovies={UpcomingMovies}
        />

        <MoviesSection
          sectionTitle="Documentary Movies"
          SectionMovies={documentaryMovies}
        />
        <MoviesSection
          sectionTitle="Popular Movies"
          SectionMovies={popularMovies}
        />
        <MoviesSection
          sectionTitle="Upcoming Movies"
          SectionMovies={UpcomingMovies}
        />

        <MoviesSection
          sectionTitle="Documentary Movies"
          SectionMovies={documentaryMovies}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  HomeScrollView: {
    rowGap: 50,
    backgroundColor: "#FFFFFF",
  },
});
