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
    query: ""
  };

  handleChange = input => {
    input.preventDefault;
    this.setState({ query: input });
  };
  handleSubmit = () => {
    event.preventDefault();
    this.componentDidMount;
    this.fetchData();
    this.setState({ query: "" });
  };

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
  render() {
    return (
      <View
      // style={styles.searchBox}
      >
        <TextInput
          style={styles.textInput}
          placeholder="write here..."
          onChangeText={text => this.handleChange(text)}
          defaultValue={this.state.query}
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

/////////////////////////////////////////////
// import React, { Component } from "react";
// import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// export default class SearchBox extends Component {
//   state = {
//     isLoading: true,
//     data: null,
//     err: null,
//     page: 1,
//     pages: null,
//     query: "",
//     value: ""
//   };
//   handleChange = input => {
//     input.preventDefault;
//     this.setState({ value: input });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.updateSearchTerms(this.state.value);
//     this.setState({ value: "" });
//   };
//   render() {
//     return (
//       <View style={styles.searchBox}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="write here..."
//           onChangeText={text => this.handleChange(text)}
//           value={this.state.value}
//         />
//         <Button title="Search" onPress={this.handleSubmit} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   searchBox: {
//     flex: 1,
//     flexDirection: "row",
//     paddingVertical: 20
//   },
//   textInput: { height: 30, borderColor: "gray", borderWidth: 1 }
// });
