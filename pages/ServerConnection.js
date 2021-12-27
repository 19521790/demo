import axios from "axios";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function ServerConnection() {
  useEffect(() => {
    connectDb();
  }, []);
  const connectDb = () => {
    console.log("hello");
    axios.get("https://localhost:5001/api/Department").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <View>
      <Text></Text>
    </View>
  );
}
