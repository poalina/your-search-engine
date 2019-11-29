import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator
} from "react-native";
import { key } from "./key";
import ArticleCard from "./Components/ArticleCard";

export default class App extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    return fetch(
      `https://content.guardianapis.com/search?tag=environment/recycling&api-key=${key}`
    )
      .then(response => response.json())
      .then(responseJSON => {
        const data = responseJSON.response.results;

        this.setState({ isLoading: false, data: data });
      })
      .catch(err => console.log(err, "error"));
  }
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
    justifyContent: "center"
  }
});
