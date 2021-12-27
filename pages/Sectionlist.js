import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const SectionListBasics = () => {
  return (
    <View>
      <SectionList
        sections={[
          { title: "J", data: ["John", "July", "January"] },
          { title: "D", data: ["Don", "December", "Day"] },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ fontSize: 20 }}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 25, backgroundColor: "gray" }}>
            {section.title}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default SectionListBasics;
