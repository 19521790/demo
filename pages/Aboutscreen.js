import React from "react";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

export default function Aboutscreen({ navigation }) {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("FlatList");
      }}
    >
      <Image
        source={require("../assets/download.jpg")}
        style={{ height: 200 }}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
