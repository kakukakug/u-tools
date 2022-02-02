import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "native-base";
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
  buttonText: {
    fontSize: 20,
    color: Colors.text,
  },
  title: { marginVertical: 10, alignSelf: "center" },
  titleText: { fontSize: 38, color: Colors.text },
});

export const WebScreen = () => {
  const navigation = useNavigation();

  const goSampleImage = () => {
    navigation.navigate("SampleImage");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Web 関連 U-tools</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.menuContainer}>
          <Button onPress={goSampleImage} colorScheme="blue" variant="outline">
            <Text style={styles.buttonText}>サンプル画像素材置き場</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
