import React from "react";
import { View, Text, Button, Alert } from "react-native";

export default function test() {
  return (
    <View>
      <Button
        title='click me'
        onPress={() => {
          Alert.alert("hello world");
        }}
      />
    </View>
  );
}
