import React from "react";
import {
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    alignItems: "center",
  },
  menuContainer: {
    marginTop: 15,
  },
  linkButton: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.surface,
    borderWidth: 4,
    borderRadius: 10,
    shadowColor: "#aaa",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    paddingHorizontal: 10,
  },
  buttonIconArea: {
    margin: 10,
  },
  buttonIcon: {
    color: Colors.secondary,
  },
  buttonTextArea: {
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    color: Colors.text,
  },
  buttonDiscription: {
    fontSize: 16,
    color: Colors.icon,
  },
  title: { marginVertical: 10, alignSelf: "center" },
  titleText: { fontSize: 38, color: Colors.text },
});

export const HomeScreen = () => {
  const navigation = useNavigation();

  const goScreen = (screenName) => {
    navigation.navigate(screenName);
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
          <TouchableOpacity
            onPress={() => {
              goScreen("Icons");
            }}
            style={styles.linkButton}>
            <View style={styles.buttonIconArea}>
              <MaterialIcons
                name="insert-emoticon"
                style={styles.buttonIcon}
                size={30}
              />
            </View>
            <View style={styles.buttonTextArea}>
              <Text style={styles.buttonText}>@expo/vector-icons Preview</Text>
              <Text style={styles.buttonDiscription}>
                @expo/vector-icons 及び react-native-vector-icons で利用できる
                icon を探せます。
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              goScreen("Shadow");
            }}
            style={styles.linkButton}>
            <View style={styles.buttonIconArea}>
              <MaterialIcons
                name="wb-shade"
                style={styles.buttonIcon}
                size={30}
              />
            </View>
            <View style={styles.buttonTextArea}>
              <Text style={styles.buttonText}>
                React Native Shadow Simulator
              </Text>
              <Text style={styles.buttonDiscription}>
                React Native の影に関する Style を試せます。
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              goScreen("FlexBox");
            }}
            style={styles.linkButton}>
            <View style={styles.buttonIconArea}>
              <Ionicons name="apps-sharp" style={styles.buttonIcon} size={30} />
            </View>
            <View style={styles.buttonTextArea}>
              <Text style={styles.buttonText}>
                React Native FlexBox Style Creator
              </Text>
              <Text style={styles.buttonDiscription}>
                React Native の FlexBox に関する Style を試せます。
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
