import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../styles/Colors";
import { Console } from "../../01_atoms/Console";
import { PageTitle } from "../../01_atoms/PageTitle";

import { styleTextFormat } from "../../../../01_entity/models/flex_style";

import { PreviewComponent } from "./PreviewComponent";
import { SettingComponent } from "./SettingComponent";

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
    flexWrap: "wrap",
    justifyContent: "center",
  },
  settingContainer: {
    margin: 10,
    backgroundColor: Colors.surface,
    padding: 10,
    width: 400,
  },
  previewContainer: {
    margin: 10,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.surface,
    padding: 10,
    width: 400,
  },
  subTitleText: {
    fontSize: 26,
    color: Colors.text,
    textAlign: "center",
    paddingTop: 6,
    paddingBottom: 16,
  },
});

export const FlexPreviewScreen = () => {
  const [flexDirection, setFlexDirection] = useState("none");
  const [justifyContent, setJustifyContent] = useState("none");
  const [alignItems, setAlignItems] = useState("none");
  const [flexWrap, setFlexWrap] = useState("none");
  const [flex, setFlex] = useState("none");
  const [alignContent, setAlignContent] = useState("none");
  const [alignSelf, setAlignSelf] = useState("none");
  const [text, setText] = useState("child");
  const [flexGrow, setFlexGrow] = useState("none");
  const [flexShrink, setFlexShrink] = useState("none");
  const [flexBasis, setFlexBasis] = useState("none");
  const [styleText, setStyleText] = useState("");

  useEffect(() => {
    const parent = styleTextFormat({
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems,
      flexWrap: flexWrap,
      alignContent: alignContent,
    });
    const children = styleTextFormat({
      flex: flex,
    });
    const child2 = styleTextFormat({
      flexGrow: flexGrow,
      flexShrink: flexShrink,
      flexBasis: flexBasis,
      alignSelf: alignSelf,
    });
    setStyleText(`  parent: {
    flex: 1,
${parent}  },
  chidren: {
${children}  },
  child-2: {
${child2}  },`);
  }, [
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    alignContent,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
  ]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <PageTitle title="React Native FlexBox Style Creator" />
        <View style={styles.main}>
          <View style={styles.settingContainer}>
            <Text style={styles.subTitleText}>Property selecter</Text>
            <SettingComponent
              flexDirection={flexDirection}
              justifyContent={justifyContent}
              alignItems={alignItems}
              flexWrap={flexWrap}
              alignContent={alignContent}
              flex={flex}
              flexGrow={flexGrow}
              flexShrink={flexShrink}
              flexBasis={flexBasis}
              alignSelf={alignSelf}
              text={text}
              setFlexDirection={setFlexDirection}
              setJustifyContent={setJustifyContent}
              setAlignItems={setAlignItems}
              setFlexWrap={setFlexWrap}
              setAlignContent={setAlignContent}
              setFlex={setFlex}
              setFlexGrow={setFlexGrow}
              setFlexShrink={setFlexShrink}
              setFlexBasis={setFlexBasis}
              setAlignSelf={setAlignSelf}
              setText={setText}
            />
          </View>
          <View style={styles.previewContainer}>
            <Text style={styles.subTitleText}>Preview</Text>
            <PreviewComponent
              flexDirection={flexDirection}
              justifyContent={justifyContent}
              alignItems={alignItems}
              flexWrap={flexWrap}
              alignContent={alignContent}
              flex={flex}
              flexGrow={flexGrow}
              flexShrink={flexShrink}
              flexBasis={flexBasis}
              alignSelf={alignSelf}
              text={text}
            />
          </View>
        </View>
      </ScrollView>
      <Console consoleText={styleText} />
    </View>
  );
};
