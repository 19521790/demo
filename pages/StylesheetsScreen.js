import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StylesheetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontWeight: "700" }]}>Hello world</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 100,
    width: 200,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});
