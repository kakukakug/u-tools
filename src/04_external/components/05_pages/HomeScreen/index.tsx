import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Colors } from "src/04_external/styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    alignItems: "center",
  },
  menuContainer: {},
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
  buttonBackground: {
    backgroundColor: Colors.white,
    margin: 8,
  },
  button: {
    borderWidth: 4,
    justifyContent: "flex-start",
  },
  title: { marginVertical: 20, alignSelf: "center" },
  titleText: { fontSize: 38, color: Colors.text },
});

export const HomeScreen = () => {
  const navigation = useNavigation();
  console.log(navigation);

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
          <View style={styles.buttonBackground}>
            <Button
              onPress={() => {
                goScreen("Icons");
              }}
              variant={"outline"}
              colorScheme={"trueGray"}
              style={styles.button}
              leftIcon={
                <MaterialIcons
                  name="insert-emoticon"
                  size={30}
                  color={Colors.secondary}
                />
              }>
              <View style={styles.buttonTextArea}>
                <Text style={styles.buttonText}>
                  @expo/vector-icons Preview
                </Text>
                <Text style={styles.buttonDiscription}>
                  @expo/vector-icons 及び react-native-vector-icons で利用できる
                  icon を探せます。
                </Text>
              </View>
            </Button>
          </View>
          <View style={styles.buttonBackground}>
            <Button
              onPress={() => {
                goScreen("Shadow");
              }}
              variant={"outline"}
              colorScheme={"trueGray"}
              style={styles.button}
              leftIcon={
                <MaterialIcons
                  name="wb-shade"
                  size={30}
                  color={Colors.secondary}
                />
              }>
              <View style={styles.buttonTextArea}>
                <Text style={styles.buttonText}>
                  React Native Shadow Simulator
                </Text>
                <Text style={styles.buttonDiscription}>
                  React Native の影に関する Style を試せます。
                </Text>
              </View>
            </Button>
          </View>
          <View style={styles.buttonBackground}>
            <Button
              onPress={() => {
                goScreen("FlexBox");
              }}
              variant={"outline"}
              colorScheme={"trueGray"}
              style={styles.button}
              leftIcon={
                <Ionicons
                  name="apps-sharp"
                  color={Colors.secondary}
                  size={30}
                />
              }>
              <View style={styles.buttonTextArea}>
                <Text style={styles.buttonText}>
                  React Native FlexBox Style Creator
                </Text>
                <Text style={styles.buttonDiscription}>
                  React Native の FlexBox に関する Style を試せます。
                </Text>
              </View>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
