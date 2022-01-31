import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import appIcon from "src/04_external/assets/images/icon.png";
import { Colors } from "src/04_external/styles/Colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  appInfo: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  appIcon: {
    margin: 20,
    width: 50,
    height: 50,
  },
  appTitle: {
    fontSize: 20,
    fontFamily: "round-mb",
  },
  appVersion: {
    fontSize: 16,
  },
  menuComponent: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    color: Colors.secondary,
    marginRight: 4,
  },
  menuText: {
    fontFamily: "round-mb",
  },
});

export const CustomDrawerComponent = () => {
  return (
    <ScrollView style={styles.safeArea}>
      <SafeAreaView>
        <View style={styles.appInfo}>
          <Image style={styles.appIcon} source={appIcon} />
          <View>
            <Text style={styles.appTitle}>{Constants.manifest.name}</Text>
            <Text style={styles.appVersion}>
              {`Version:${Constants.manifest.version}`}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.menuComponent}
            onPress={() => {
              Linking.openURL("https://github.com/kakukakug/u-tools");
            }}>
            <Ionicons style={styles.menuIcon} size={26} name="logo-github" />
            <Text style={styles.menuText}>Repository</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuComponent}
            onPress={() => {
              Linking.openURL("https://github.com/kakukakug/");
            }}>
            <Ionicons style={styles.menuIcon} size={26} name="person-circle" />
            <Text style={styles.menuText}>Auther</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuComponent}
            onPress={() => {
              Linking.openURL("https://honmushi.com/");
            }}>
            <MaterialIcons
              style={styles.menuIcon}
              size={26}
              name="library-books"
            />
            <Text style={styles.menuText}>Blog</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
