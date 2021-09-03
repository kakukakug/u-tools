import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, StyleSheet, Text, View, Picker } from "react-native";

import { Colors } from "../../../styles/Colors";
import { Console } from "../../01_atoms/Console";

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

  const createStyle = useCallback((propObj) => {
    let style = {};
    for (var key in propObj) {
      if (propObj[key] !== "none") {
        if (["flex", "flexGrow", "flexShrink"].includes(key)) {
          style[key] = Number(propObj[key]);
        } else if (key === "flexBasis" && propObj[key] !== "auto") {
          style[key] = Number(propObj[key]);
        } else {
          style[key] = propObj[key];
        }
      }
    }
    return style;
  }, []);

  const PreviewChild = (data) => {
    return (
      <View
        style={[
          styles.children,
          createStyle({
            flex: flex,
          }),
          data.no === 2
            ? createStyle({
                flexGrow: flexGrow,
                flexShrink: flexShrink,
                flexBasis: flexBasis,
                alignSelf: alignSelf,
              })
            : {},
        ]}>
        <Text
          style={[styles.previewText, data.no === 2 ? { color: "#e77" } : {}]}>
          {text}-{data.no}
        </Text>
      </View>
    );
  };

  const PreviewContainer = () => {
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
        <PreviewChild no={1} />
        <PreviewChild no={2} />
        <PreviewChild no={3} />
        <PreviewChild no={4} />
      </View>
    );
  };

  const SettingComponent = (data) => {
    const { name, value, onValueChange, selectionArray } = data;
    return (
      <View style={styles.flexRow}>
        <Text style={styles.stylePropText}>{name}</Text>
        <Picker
          selectedValue={value}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue) => {
            onValueChange(itemValue);
          }}>
          {selectionArray.map((label, index) => {
            return <Picker.Item label={label} value={value} key={index} />;
          })}
        </Picker>
      </View>
    );
  };
  const CustomerContainer = () => {
    return (
      <View style={styles.customerContainer}>
        <View style={styles.parentCustomer}>
          <Text style={styles.h1Text}>Parent</Text>
          <SettingComponent
            name={"flexDirection"}
            value={flexDirection}
            onValueChange={setFlexDirection}
            selectionArray={[
              "none",
              "column",
              "row",
              "column-reverse",
              "row-reverse",
            ]}
          />
          <SettingComponent
            name={"justifyContent"}
            value={justifyContent}
            onValueChange={setJustifyContent}
            selectionArray={[
              "none",
              "flex-start",
              "center",
              "flex-end",
              "space-around",
              "space-between",
              "space-evenly",
            ]}
          />
          <SettingComponent
            name={"alignItems"}
            value={alignItems}
            onValueChange={setAlignItems}
            selectionArray={[
              "none",
              "flex-start",
              "center",
              "flex-end",
              "stretch",
            ]}
          />
          <SettingComponent
            name={"flexWrap"}
            value={flexWrap}
            onValueChange={setFlexWrap}
            selectionArray={["none", "nowrap", "wrap", "wrap-reverse"]}
          />
          <SettingComponent
            name={"alignContent"}
            value={alignContent}
            onValueChange={setAlignContent}
            selectionArray={[
              "none",
              "flex-start",
              "flex-end",
              "center",
              "stretch",
              "space-between",
              "space-around",
            ]}
          />
        </View>
        <View style={styles.childCustomer}>
          <Text style={styles.h1Text}>Children</Text>
          <SettingComponent
            name={"text"}
            value={text}
            onValueChange={setText}
            selectionArray={[
              "child",
              "long text. mega super long text contents",
            ]}
          />
          <SettingComponent
            name={"flex"}
            value={flex}
            onValueChange={setFlex}
            selectionArray={["none", "1", "2"]}
          />
          <Text style={styles.h2Text}>
            only <Text style={{ color: "#e77" }}>child-2</Text> style prop
          </Text>
          <SettingComponent
            name={"flexGrow"}
            value={flexGrow}
            onValueChange={setFlexGrow}
            selectionArray={["none", "0", "1", "2", "3"]}
          />
          <SettingComponent
            name={"flexShrink"}
            value={flexShrink}
            onValueChange={setFlexShrink}
            selectionArray={["none", "1", "2", "3"]}
          />
          <SettingComponent
            name={"flexBasis"}
            value={flexBasis}
            onValueChange={setFlexBasis}
            selectionArray={["none", "auto", "10", "20", "30"]}
          />
          <SettingComponent
            name={"alignSelf"}
            value={alignSelf}
            onValueChange={setAlignSelf}
            selectionArray={[
              "none",
              "auto",
              "flex-start",
              "flex-end",
              "center",
              "stretch",
              "baseline",
            ]}
          />
        </View>
      </View>
    );
  };

  const styleTextFormat = useCallback(
    (obj) => {
      let styleObj = createStyle(obj);
      let ret = "";
      for (var key in styleObj) {
        if (typeof styleObj[key] === "string") {
          ret += "    " + key + ': "' + styleObj[key] + '"' + ",\n";
        } else {
          ret += "    " + key + ": " + styleObj[key] + ",\n";
        }
      }
      return ret;
    },
    [createStyle]
  );

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
    styleTextFormat,
  ]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            React Native FlexBox Style Creator
          </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.settingContainer}>
            <Text style={styles.subTitleText}>Property selecter</Text>
            <CustomerContainer />
          </View>
          <View style={styles.previewContainer}>
            <Text style={styles.subTitleText}>Preview</Text>
            <PreviewContainer />
          </View>
        </View>
      </ScrollView>
      <Console consoleText={styleText} />
    </View>
  );
};

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
  },
  customerContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  parentCustomer: {
    flex: 1,
    backgroundColor: Colors.surface,
    paddingHorizontal: 4,
    height: 300,
  },
  childCustomer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.icon,
    height: 300,
  },

  parent: {
    backgroundColor: Colors.surface,
    padding: 10,
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
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  subTitleText: {
    fontSize: 26,
    color: Colors.icon,
    textAlign: "center",
    paddingTop: 6,
  },
  h1Text: {
    fontSize: 20,
    color: Colors.text,
    textAlign: "center",
    paddingTop: 6,
  },
  h2Text: {
    fontSize: 16,
    color: Colors.text,
    textAlign: "center",
    paddingTop: 10,
  },
  stylePropText: {
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  picker: {
    height: 20,
    width: 60,
    borderRadius: 4,
  },
  pickerItem: {},

  title: { marginVertical: 10 },
  titleText: { fontSize: 38, color: Colors.text },
});
