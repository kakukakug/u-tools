import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../styles/Colors";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const goIcons = () => {
    navigation.navigate("Icons");
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={goIcons} style={styles.linkButton}>
            <Text style={styles.buttonText}>
              React Native Vector Icons の アイコンプレビュー
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

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
    margin: 5,
    padding: 15,
  },
  buttonText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
