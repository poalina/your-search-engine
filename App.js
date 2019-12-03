import React, { Component } from "react";
import * as api from "./api";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator
} from "react-native";
import ArticleCard from "./Components/ArticleCard";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";

export default class App extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let query = "pink";
    let page = 4;
    api
      .getData(query, page)
      .then(data => this.setState({ isLoading: false, data: data.results }));
  };
  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header />
        <SearchBox />
        <ScrollView>
          {data.map(item => {
            return <ArticleCard key={item.id} item={item} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25
  }
});
