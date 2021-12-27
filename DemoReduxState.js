import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import NormalState from "./NormalState/NormalState";
import DemoRedux from "./redux/DemoRedux";
import { AntDesign } from "@expo/vector-icons";

export default function DemoReduxState({ navigation }) {
  return (
    <View style={{ marginTop: 50 }}>
      <NormalState />
      <DemoRedux />
      <Pressable
        onPress={() => navigation.push("DemoData")}
        style={{
          marginTop: 100,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Go to DemoData</Text>
        <AntDesign name='caretright' size={24} color='black' />
      </Pressable>
    </View>
  );
}
