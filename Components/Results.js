import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  ActivityIndicator
} from "react-native";
import ArticleCard from "./ArticleCard";

export default class Results extends Component {
  render() {
    const { currentPage, pages, results } = this.props;

    return (
      <ScrollView>
        {results.map(item => {
          return <ArticleCard key={item.id} item={item} />;
        })}
        <View style={styles.buttons}>
          <Button
            disabled={currentPage === 1}
            onPress={() => this.props.handleChangePage(-1)}
            title="Prev page"
          />
          <Button
            disabled={currentPage === pages}
            onPress={() => this.props.handleChangePage(1)}
            title="Next page"
          />
        </View>
      </ScrollView>
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
