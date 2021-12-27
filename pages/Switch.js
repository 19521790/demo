import React, { useState } from "react";
import { View, Switch } from "react-native";

export default function DemoSwitch() {
  const [isEnable, setEnable] = useState(false);
  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={"#f5dd4b"}
        value={isEnable}
        onValueChange={() => setEnable(!isEnable)}
      />
    </View>
  );
}
