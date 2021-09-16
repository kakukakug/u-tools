import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../styles/Colors";

import { Console } from "../../01_atoms/Console";
import { PageTitle } from "../../01_atoms/PageTitle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,
    flexDirection: "row",
  },
  settingContainer: {
    padding: 10,
    width: 400,
  },
  previewContainer: {
    padding: 10,
    width: 400,
    backgroundColor: Colors.white,
  },
  subTitleText: {
    fontSize: 26,
    color: Colors.icon,
    textAlign: "center",
    paddingTop: 6,
  },
  previewBox: {
    backgroundColor: Colors.white,
    padding: 10,
  },
});
export const ShadowStyleScreen = () => {
  const [elevation, setElevation] = useState(4);
  const [shadowColor, setShadowColor] = useState("#639");
  const [shadowOffsetX, setShadowOffsetX] = useState(8);
  const [shadowOffsetY, setShadowOffsetY] = useState(7);
  const [shadowOpacity, setShadowOpacity] = useState(1);
  const [shadowRadius, setShadowRadius] = useState(7);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <PageTitle title="React Native Shadow Simulator" />
        <View style={styles.main}>
          <View style={styles.settingContainer}>
            <Text style={styles.subTitleText}>setting</Text>
            <View>
              <Text>ios</Text>
              <View>
                <Text>shadow</Text>
              </View>
              <View>
                <Text>shadow</Text>
              </View>
            </View>
            <View>
              <Text>android</Text>
              <View>
                <Text>elevetion</Text>
              </View>
            </View>
          </View>
          <View style={styles.previewContainer}>
            <Text style={styles.subTitleText}>preview</Text>
            <View>
              <Text>ios</Text>
              <View
                style={[
                  styles.previewBox,
                  {
                    shadowColor: shadowColor,
                    shadowOffset: {
                      width: shadowOffsetX,
                      height: shadowOffsetY,
                    },
                    shadowOpacity: shadowOpacity,
                    shadowRadius: shadowRadius,
                  },
                ]}>
                <Text>hello</Text>
              </View>
            </View>
            <View>
              <Text>android</Text>
              <View style={[styles.previewBox, { elevation: elevation }]}>
                <Text>hello</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Console consoleText={""} />
    </View>
  );
};
