import * as React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NormalState() {
  const [isLogin, set_login] = useState(false);
  function Login() {
    set_login(true);
  }
  function Logout() {
    set_login(false);
  }

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Normal State</Text>
      <Button title='Login' onPress={Login} />
      <Text style={styles.textStyle}>
        {isLogin ? "User is login" : "User is logout"}
      </Text>
      <Button title='Logout' onPress={Logout} />
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: { marginVertical: 15, fontSize: 20 },
});
