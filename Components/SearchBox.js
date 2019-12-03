import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  TextInput,
  Button
} from "react-native";

export default class SearchBox extends Component {
  state = {
    input: null
  };
  render() {
    return (
      <View>
        <Text>Search:</Text>
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
        />
        <Button
          title="Search"
          onPress={() => console.log("I've been pressed!")}
        ></Button>
      </View>
    );
  }
}
