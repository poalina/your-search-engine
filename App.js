import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import ArticleCard from "./Components/ArticleCard";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";

export default class App extends Component {
  render() {
    // const { data, isLoading, pages, page } = this.state;
    // if (isLoading) {
    //   return (
    //     <View>
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     </View>
    //   );
    // }
    return (
      <View style={styles.container}>
        <Header />
        <SearchBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20
  }
});
