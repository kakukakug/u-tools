import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  familyButton: {
    backgroundColor: Colors.surface,
    padding: 10,
    marginVertical: 4,
  },
  familyText: {
    color: Colors.text,
  },
});

export const FontFamilyItem = (props) => {
  const { name, onPress, selectFamily } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(name);
      }}
      style={[
        styles.familyButton,
        name === selectFamily
          ? { backgroundColor: Colors.primary }
          : { backgroundColor: Colors.surface },
      ]}
      testID={"fontFamilyItem"}>
      <Text style={styles.familyText}>{name}</Text>
    </TouchableOpacity>
  );
};
