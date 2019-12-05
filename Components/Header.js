import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>The latest news</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center"
  }
});
