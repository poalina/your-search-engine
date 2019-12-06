import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button
} from "react-native";
import { Linking } from "expo";

export default class ArticleCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <View>
        <Text style={styles.title}>{item.webTitle}</Text>
        <Text style={styles.text}>
          Section: {item.pillarName}, Topic: {item.sectionName}, Type:{" "}
          {item.type}
        </Text>
        <Text style={styles.text}>
          Created at: {new Date(item.webPublicationDate).toDateString()}
        </Text>

        <Button
          onPress={() => Linking.openURL(item.webUrl)}
          title="Read more"
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center"
  },
  text: {
    fontSize: 12,
    fontWeight: "200",
    textAlign: "center"
  }
});
