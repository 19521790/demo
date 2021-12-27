import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,

        flexDirection: "column",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flexBasis: 600,
          width: 20,

          flexShrink: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          flexBasis: 600,
          width: 20,

          flexShrink: 4,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "green",
          flexBasis: 600,
          width: 20,
          flexShrink: 2,
        }}
      ></View>
    </View>
  );
}
