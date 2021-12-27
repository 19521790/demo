import React from "react";
import { View, Text, FlatList, Button } from "react-native";

export default function List() {
  return (
    <View>
      <FlatList
        data={[
          { key: "Devin", old: 12 },
          { key: "Dan", old: 30 },
          { key: "Dominic", old: 33 },
          { key: "Jackson", old: 22 },
          { key: "James", old: 20 },
          { key: "Joel", old: 66 },
          { key: "John", old: 32 },
          { key: "Jillian", old: 13 },
          { key: "Jimmy", old: 16 },
          { key: "Julie", old: 30 },
          { key: "Jack", old: 32 },
          { key: "LiLy", old: 13 },
          { key: "Json", old: 16 },
          { key: "Brack", old: 30 },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ fontSize: 25 }}>{item.key}</Text>
              <Text style={{ fontSize: 20 }}>{item.old}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
