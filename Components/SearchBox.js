import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default class SearchBox extends Component {
  state = {
    value: ""
  };
  handleChange = input => {
    input.preventDefault;
    this.setState({ value: input });
  };
  render() {
    console.log(this.state.value, "value");
    return (
      <View>
        <Text>Search:</Text>
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          placeholder="write here..."
          onChangeText={text => this.handleChange(text)}
          defaultValue={this.state.value}
        />
        <Button
          title="Search"
          onPress={() => this.props.updateSearchTerms(this.state.value)}
        ></Button>
      </View>
    );
  }
}
