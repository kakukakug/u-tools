import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStyle } from "src/01_entity/models/flex_style";
import { Colors } from "src/04_external/styles/Colors";

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#f8f8ff",
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.icon,
    flex: 1,
  },
  children: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.icon,
    padding: 2,
  },
  previewText: {
    color: Colors.text,
  },
});

const PreviewChild = (props) => {
  const { no, flex, flexGrow, flexShrink, flexBasis, alignSelf, text } = props;
  return (
    <View
      style={[
        styles.children,
        createStyle({
          flex: flex,
        }),
        no === 2
          ? createStyle({
              flexGrow: flexGrow,
              flexShrink: flexShrink,
              flexBasis: flexBasis,
              alignSelf: alignSelf,
            })
          : {},
      ]}>
      <Text
        style={[
          styles.previewText,
          no === 2 ? { color: Colors.notification } : {},
        ]}>
        {text}-{no}
      </Text>
    </View>
  );
};

export const PreviewComponent = (props) => {
  const {
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
    text,
  } = props;
  return (
    <View
      style={[
        styles.parent,
        createStyle({
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          flexWrap: flexWrap,
          alignContent: alignContent,
        }),
      ]}>
      <PreviewChild
        no={1}
        flex={flex}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        alignSelf={alignSelf}
        text={text}
      />
      <PreviewChild
        no={2}
        flex={flex}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        alignSelf={alignSelf}
        text={text}
      />
      <PreviewChild
        no={3}
        flex={flex}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        alignSelf={alignSelf}
        text={text}
      />
      <PreviewChild
        no={4}
        flex={flex}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        alignSelf={alignSelf}
        text={text}
      />
    </View>
  );
};
