import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  title: { marginVertical: 10, padding: 10 },
  titleText: { fontSize: 38, color: Colors.text },
});

type OuterProps = {
  title: string;
};
export const PageTitle = (props: OuterProps) => {
  const { title } = props;

  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};
