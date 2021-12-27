import React, { useRef } from "react";
import { Animated, Button, Text, View } from "react-native";

export default function AnimationScreen() {
  const fadein = new Animated.Value(0);
  const pressFadein = () => {
    Animated.timing(fadein, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };
  const pressFadeout = () => {
    Animated.timing(fadein, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View style={{ opacity: fadein, marginBottom: 20 }}>
        <Text style={{ fontSize: 25, color: "red", backgroundColor: "green" }}>
          textInComponent
        </Text>
      </Animated.View>
      <View style={{ marginBottom: 10 }}>
        <Button
          title='Fadein'
          onPress={() => {
            pressFadein();
          }}
        />
      </View>
      <View>
        <Button
          title='Fadeout'
          onPress={() => {
            pressFadeout();
          }}
        />
      </View>
    </View>
  );
}
