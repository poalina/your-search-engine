import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default class ArticleCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <View>
        <Text style={styles.card}>{item.webTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  }
});
