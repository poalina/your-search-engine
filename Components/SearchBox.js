import React, { Component } from "react";
import * as api from "../api";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import Results from "./Results";

export default class SearchBox extends Component {
  state = {
    results: null,
    err: null,
    page: 1,
    pages: null,
    query: "",
    input: ""
  };

  handleChange = input => {
    input.preventDefault;
    const regex = /[A-Za-z0-9 _]+$/;
    if (regex.test(input)) {
      this.setState({ input });
    } else {
      alert("incorrect input");
    }
  };
  handleSubmit = () => {
    this.setState({ query: this.state.input });
  };

  handleChangePage = direction => {
    this.setState(currentState => {
      return { page: currentState.page + direction };
    });
  };
  fetchData = () => {
    const { page, query } = this.state;
    api
      .getData(page, query)
      .then(data =>
        this.setState({
          isLoading: false,
          results: data.results,
          pages: data.pages
        })
      )
      .catch(err => {
        this.setState({ err: true });
      });
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.fetchData();
    }
  }
  render() {
    if (this.state.err)
      return <Text style={{ textAlign: "center" }}>Page not found</Text>;
    return (
      <View style={styles.main}>
        <TextInput
          clearTextOnFocus={true}
          style={styles.textInput}
          placeholder="write here..."
          onChangeText={text => this.handleChange(text)}
          defaultValue={this.state.input}
        />
        <Button
          color="green"
          title="Search"
          onPress={() => this.handleSubmit()}
        />
        <ScrollView>
          {this.state.results && (
            <Results
              results={this.state.results}
              pages={this.state.pages}
              currentPage={this.state.page}
              handleChangePage={this.handleChangePage}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: { marginVertical: 20 },
  textInput: {
    textAlign: "center",
    height: 30,
    borderColor: "gray",
    borderWidth: 1
  }
});
