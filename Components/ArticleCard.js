import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Linking } from "expo";

export default class ArticleCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(item.webUrl)}
        >
          <Text style={styles.title}>{item.webTitle}</Text>
        </TouchableOpacity>
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
        <Separator style={styles.separator} />
      </View>
    );
  }
}
function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center"
  },
  text: {
    fontSize: 12,
    fontWeight: "200",
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    padding: 10
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
