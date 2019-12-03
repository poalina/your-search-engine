import React, { Component } from "react";
import * as api from "./api";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  ActivityIndicator
} from "react-native";
import ArticleCard from "./Components/ArticleCard";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";

export default class App extends Component {
  state = {
    isLoading: true,
    data: null,
    err: null,
    page: 1,
    pages: null,
    query: "orange"
  };

  componentDidMount() {
    this.fetchData();
  }
  handleChangePage = direction => {
    this.setState(currentState => {
      return { page: currentState.page + direction };
    });
  };

  fetchData = () => {
    const query = this.state.query;
    const page = this.state.page;
    api.getData(query, page).then(data =>
      this.setState({
        isLoading: false,
        data: data.results,
        pages: data.pages
      })
    );
  };
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchData();
    }
  }
  render() {
    const { data, isLoading, pages, page } = this.state;
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
          <View style={styles.buttons}>
            <Button
              disabled={page === 1}
              onPress={() => this.handleChangePage(-1)}
              title="Prev page"
            />
            <Button
              disabled={page === pages}
              onPress={() => this.handleChangePage(1)}
              title="Next page"
            />
          </View>
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
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20
  }
});
