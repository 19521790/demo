import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
export default function DemoData({ navigation }) {
  const [data, set_data] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
      console.log(res.data.abilities);
      set_data(res.data.abilities);
    });
  }, []);
  const isLoginRedux = useSelector((state) => state.isLogin);
  return (
    <View style={{ marginVertical: 100 }}>
      {isLoginRedux &&
        data.map((item) => {
          return (
            <View key={item.ability.url}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Name: {item.ability.name}
              </Text>
              <Text style={{ fontSize: 15 }}>Slot: {item.slot} </Text>
            </View>
          );
        })}
      <Button title='Go back to DemoRedux' onPress={() => navigation.pop()} />
    </View>
  );
}
