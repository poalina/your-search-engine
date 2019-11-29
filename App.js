import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { key } from "./key";

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
          <Text>Loading....</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>data</Text>
        {data.map(item => {
          return <Text>{item.webTitle}</Text>;
        })}
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
