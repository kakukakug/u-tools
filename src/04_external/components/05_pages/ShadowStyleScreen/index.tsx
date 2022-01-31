import React, { useState } from "react";
import { TextInput, ScrollView, StyleSheet, Text, View } from "react-native";
import { Slider } from "native-base";

import { Colors } from "src/04_external/styles/Colors";

import { Console } from "src/04_external/components/01_atoms/Console";
import { PageTitle } from "src/04_external/components/01_atoms/PageTitle";

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
    flexDirection: "row",
    justifyContent: "center",

    flexWrap: "wrap",
  },
  settingContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: Colors.surface,
  },
  previewContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 100,
    paddingBottom: 100,
    backgroundColor: Colors.white,
    borderColor: Colors.surface,
    borderWidth: 2,
  },
  subTitleText: {
    fontSize: 26,
    color: Colors.text,
    textAlign: "center",
    paddingTop: 6,
  },
  osText: {
    fontSize: 22,
    color: Colors.text,
    paddingVertical: 6,
    marginTop: 16,
  },
  previewBox: {
    backgroundColor: Colors.surface,
    padding: 40,
    alignSelf: "center",
  },
  textInput: {
    borderColor: Colors.surface,
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 4,
    marginTop: 4,
  },
  inputView: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 14,
    margin: 4,
  },
  propertyName: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
    marginTop: 2,
  },
  propertyValue: {
    flex:1,
    fontSize: 16,
    color: Colors.icon,
    marginLeft: 6,
  },
});

export const ShadowStyleScreen = () => {
  const [shadowColor, setShadowColor] = useState("#333");
  const [shadowOffsetX, setShadowOffsetX] = useState(8);
  const [shadowOffsetY, setShadowOffsetY] = useState(8);
  const [shadowOpacity, setShadowOpacity] = useState(1);
  const [shadowRadius, setShadowRadius] = useState(0);

  const consoleText = `  componentShadow: {
    shadowColor: "${shadowColor}",
    shadowOffset: { width: ${shadowOffsetX}, height: ${shadowOffsetY} },
    shadowOpacity: ${shadowOpacity},
    shadowRadius: ${shadowRadius},
    elevation: 1,
  },`;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <PageTitle title="React Native Shadow Simulator" />
        <View style={styles.main}>
          <View style={styles.settingContainer}>
            <Text style={styles.subTitleText}>Property selecter</Text>
            <View>
              <Text style={styles.osText}>ios</Text>
              <View style={styles.inputView}>
                <Text>shadowColor</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="#333"
                  value={shadowColor}
                  onChangeText={setShadowColor}
                />
              </View>
              <View>
                <View style={styles.inputView}>
                  <Text style={styles.propertyName}>
                    shadowOffset-width
                    <Text style={styles.propertyValue}>
                      {`{ width: ${shadowOffsetX}, height: ${shadowOffsetY} }`}
                    </Text>
                  </Text>
                  <Slider
                    minValue={-50}
                    maxValue={50}
                    colorScheme="blue"
                    size="md"
                    onChange={setShadowOffsetX}
                    value={shadowOffsetX}
                    step={1}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Text style={styles.propertyName}>shadowOffset-height</Text>
                  <Slider
                    minValue={-50}
                    maxValue={50}
                    colorScheme="blue"
                    size="md"
                    onChange={setShadowOffsetY}
                    value={shadowOffsetY}
                    step={1}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
              <View>
                <View style={styles.inputView}>
                  <Text style={styles.propertyName}>
                    shadowOpacity
                    <Text style={styles.propertyValue}>{shadowOpacity}</Text>
                  </Text>
                  <Slider
                    minValue={0}
                    maxValue={1}
                    colorScheme="blue"
                    size="md"
                    onChange={setShadowOpacity}
                    value={shadowOpacity}
                    step={0.01}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
              <View>
                <View style={styles.inputView}>
                  <Text style={styles.propertyName}>
                    shadowRadius
                    <Text style={styles.propertyValue}>{shadowRadius}</Text>
                  </Text>
                  <Slider
                    minValue={0}
                    maxValue={50}
                    colorScheme="blue"
                    size="md"
                    onChange={setShadowRadius}
                    value={shadowRadius}
                    step={1}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.osText}>android</Text>
              <View style={styles.inputView}>
                <Text>
                  {`android の場合は elevation で指定します。
Webでは再現できなかったので表示していません。`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.previewContainer}>
            <Text style={styles.subTitleText}>preview</Text>
            <View>
              <Text style={styles.osText}>ios</Text>
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
          </View>
        </View>
      </ScrollView>
      <Console consoleText={consoleText} />
    </View>
  );
};
