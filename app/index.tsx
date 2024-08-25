import {
  FlatList,
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
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
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
      "https://api.themoviedb.org/3/tv/popular?api_key=77b9ae4b3e48759ebaf5c4e03093ebbc"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularTv(data.results);
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
      sectionTitle: "Popular TV",
      SectionMovies: popularTv,
    },
    {
      sectionTitle: "Documentary Movies",
      SectionMovies: documentaryMovies,
    },
  ];

  return (
    <SafeAreaView>
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
        <MoviesSection sectionTitle="Popular TV" SectionMovies={popularTv} />
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
        <MoviesSection sectionTitle="Popular TV" SectionMovies={popularTv} />
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
        <MoviesSection sectionTitle="Popular TV" SectionMovies={popularTv} />
        <MoviesSection
          sectionTitle="Documentary Movies"
          SectionMovies={documentaryMovies}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  HomeScrollView: {
    rowGap: 50,
  },
});
