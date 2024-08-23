import { FlatList, SafeAreaView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ListImage from "../components/ListImage";
import HorizontalFlatList from "../components/HorizontalFlatList";
import MoviesSection from "../components/MoviesSection";
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
      <FlatList
        contentInset={{ bottom: 20 }}
        data={MoviesSections}
        renderItem={({ item }) => (
          <MoviesSection
            sectionTitle={item.sectionTitle}
            SectionMovies={item.SectionMovies}
          />
        )}
        keyExtractor={(item) => item.sectionTitle}
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
