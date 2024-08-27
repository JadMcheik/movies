import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import BackArrowHeader from "../components/BackArrowHeader";

const Search = () => {
  const [search, setSearch] = useState("");
  const [moviesList, setMoviesList] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=77b9ae4b3e48759ebaf5c4e03093ebbc`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMoviesList(data.results);
      });
  }, [search]);

  const updateSearch = (search) => {
    setSearch(search);
  };
  const gap = 40;
  return (
    <View style={styles.search}>
      <BackArrowHeader fill="black" />

      <View style={styles.SearchBarView}>
        <SearchBar
          platform="default"
          round={true}
          lightTheme={true}
          placeholder="Search movies"
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={styles.SearchBar}
          containerStyle={styles.searchContainer}
        />
      </View>
      <View>
        {moviesList ? (
          <FlatList
            contentContainerStyle={styles.SearchFlatlist}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ gap }}
            contentInset={{ bottom: 70 }}
            numColumns="2"
            data={moviesList}
            renderItem={({ item }) => (
              <Link
                href={{
                  pathname: "/details",
                  params: { id: item.id },
                }}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{ width: 133, height: 200 }}
                />
              </Link>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 50 }} />}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  search: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#FFFFFF",
    rowGap: 40,
  },

  SearchBarView: {
    width: 335,
    height: 56,
    alignSelf: "center",
  },

  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  SearchBar: {
    width: "100%",
    backgroundColor: "lightgray",
  },
  SearchFlatlist: {
    width: "100%",
    alignItems: "center",
    rowGap: 20,
  },
});
