import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {},
  menuContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  linkButton: {
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.text,
  },
  title: { marginVertical: 10, alignSelf: "center" },
  titleText: { fontSize: 38, color: Colors.text },
});

export const HomeScreen = () => {
  const navigation = useNavigation();

  const goFlexPreview = () => {
    navigation.navigate("FlexBox");
  };
  const goIcons = () => {
    navigation.navigate("Icons");
  };
  const goShadowStyle = () => {
    navigation.navigate("Shadow");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>React Native U-tools</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.menuContainer}>
          <Button
            uppercase={false}
            onPress={goIcons}
            mode="outlined"
            style={styles.linkButton}>
            <Text style={styles.buttonText}>@expo/vector-icons Preview</Text>
          </Button>
          <Button
            uppercase={false}
            onPress={goShadowStyle}
            mode="outlined"
            style={styles.linkButton}>
            <Text style={styles.buttonText}>React Native Shadow Simulator</Text>
          </Button>
          <Button
            uppercase={false}
            onPress={goFlexPreview}
            mode="outlined"
            style={styles.linkButton}>
            <Text style={styles.buttonText}>
              React Native FlexBox Style Creator
            </Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
