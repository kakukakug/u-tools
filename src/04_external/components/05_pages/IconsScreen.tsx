import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Colors } from "../../styles/Colors";

export const IconsScreen = () => {
  const navigation = useNavigation();

  const keys = Object.keys(MaterialIconsGlyphs);
  console.log(keys);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>アイコンプレビュー</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.sidebar}>
          <View style={styles.selectIconSet}>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
            <Text style={styles.iconSetText}>アイコンプレビュー</Text>
          </View>
          <View style={styles.code}>
            <Text style={styles.codeText}>CODE</Text>
            <Text style={styles.codeText}>CODE</Text>
            <Text style={styles.codeText}>CODE</Text>
            <Text style={styles.codeText}>CODE</Text>
          </View>
        </View>
        <ScrollView
          style={styles.iconView}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.search}>
            <TextInput />
          </View>
          <View style={styles.preview}>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Icon size={13} name="info" />
              <Text style={styles.iconName}>info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Icon size={13} name="info" />
              <Text style={styles.iconName}>info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Icon size={13} name="info" />
              <Text style={styles.iconName}>info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Icon size={13} name="info" />
              <Text style={styles.iconName}>info</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: { padding: 10 },
  titleText: { fontSize: 20 },
  main: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    padding: 20,
    borderColor: "#888",
    borderWidth: 1,
    border: "solid",
  },
  selectIconSet: {
    padding: 10,
    borderColor: "#888",
    borderWidth: 1,
    border: "solid",
  },
  iconSetText: {},
  code: {
    backgroundColor: "#666",
    padding: 20,
  },
  codeText: {
    backgroundColor: "#aaa",
    Color: "#333",
    padding: 6,
  },
  iconView: {
    padding: 20,
    flex: 1,
  },
  contentContainer: {},
  search: {
    backgroundColor: "#aaa",
    padding: 6,
  },
  preview: {
    flex: 1,
    padding: 20,
  },
  iconButton: {
    margin: 4,
    padding: 10,
    borderColor: "#888",
    borderWidth: 1,
    border: "solid",
  },
  iconName: {},
});
