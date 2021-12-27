import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions";
export default function DemoRedux() {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Redux </Text>
      <Button title='Login' onPress={() => dispatch(login())} />
      <Text style={{ marginVertical: 15, fontSize: 20 }}>
        {isLogin ? "User is login" : "User is logout"}
      </Text>
      <Button title='Logout' onPress={() => dispatch(logout())} />
    </View>
  );
}
