import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "src/04_external/styles/Colors";

const styles = StyleSheet.create({
  familyButton: {
    backgroundColor: Colors.white,
    padding: 10,
    marginVertical: 4,
  },
  familyText: {
    color: Colors.text,
  },
});

type OuterProps = {
  name: string;
  onPress: (props: string) => void;
  selectFamily: string;
};

export const FontFamilyItem = (props: OuterProps) => {
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
          : { backgroundColor: Colors.white },
      ]}
      testID={"fontFamilyItem"}>
      <Text style={styles.familyText}>{name}</Text>
    </TouchableOpacity>
  );
};
