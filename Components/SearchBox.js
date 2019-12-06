import React, { Component } from "react";
import * as api from "../api";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Results from "./Results";

export default class SearchBox extends Component {
  state = {
    isLoading: true,
    results: null,
    err: null,
    page: 1,
    pages: null,
    query: "",
    input: "",
    validate: true
  };

  handleChange = input => {
    input.preventDefault;
    const regex = /[A-Za-z0-9 _]+$/;
    if (regex.test(input)) {
      this.setState({ input });
    } else {
      // this.setState({ validate: false });
      alert("incorrect input");
    }
  };
  handleSubmit = () => {
    this.setState({ query: this.state.input });

    this.fetchData();
  };

  componentDidMount() {
    console.log("mounted");
  }
  handleChangePage = direction => {
    this.setState(currentState => {
      return { page: currentState.page + direction };
    });
  };
  fetchData = () => {
    const { page, query } = this.state;
    api.getData(page, query).then(data =>
      this.setState({
        isLoading: false,
        results: data.results,
        pages: data.pages
      })
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.fetchData();
    }
  }
  render() {
    return (
      <View
      // style={styles.searchBox}
      >
        <TextInput
          clearTextOnFocus={true}
          style={styles.textInput}
          placeholder="write here..."
          onChangeText={text => this.handleChange(text)}
          defaultValue={this.state.input}
        />
        <Button
          // style={styles.button}
          title="Search"
          onPress={() => this.handleSubmit()}
        />
        {this.state.results && (
          <Results
            results={this.state.results}
            pages={this.state.pages}
            currentPage={this.state.page}
            handleChangePage={this.handleChangePage}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 20
  },
  textInput: { height: 30, borderColor: "gray", borderWidth: 1 },
  button: {
    height: 30,
    width: 20
  }
});
