import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Picker,
} from "react-native";

import { Colors } from "../../../styles/Colors";

export const FlexPreviewScreen = () => {
  const [flexDirection, setFlexDirection] = useState("none");
  const [justifyContent, setJustifyContent] = useState("none");
  const [alignItems, setAlignItems] = useState("none");
  const [flexWrap, setFlexWrap] = useState("none");
  const [flex, setFlex] = useState("none");
  const [alignContent, setAlignContent] = useState("none");
  const [alignSelf, setAlignSelf] = useState("none");
  const [text, setText] = useState("child");
  const [flexGrow, setFlexGrow] = useState("");
  const [flexShrink, setFlexShrink] = useState("none");
  const [flexBasis, setFlexBasis] = useState("none");
  const [tab, setTab] = useState(false);

  const createStyle = (propObj) => {
    let style = {};
    for (var key in propObj) {
      if (propObj[key] != "none") {
        if (["flex", "flexGrow", "flexShrink"].includes(key)) {
          style[key] = Number(propObj[key]);
        } else if ("flexBasis" === key && propObj[key] != "auto") {
          style[key] = Number(propObj[key]);
        } else {
          style[key] = propObj[key];
        }
      }
    }
    return style;
  };

  const PreviewChild = (data) => {
    return (
      <View
        style={[
          styles.children,
          createStyle({
            flex: flex,
          }),
          data.no == 2
            ? createStyle({
                flexGrow: flexGrow,
                flexShrink: flexShrink,
                flexBasis: flexBasis,
                alignSelf: alignSelf,
              })
            : {},
        ]}>
        <Text
          style={[styles.previewText, data.no == 2 ? { color: "#e77" } : {}]}>
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
          onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}>
          {selectionArray.map((name, index) => {
            return <Picker.Item label={name} value={name} key={index} />;
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
            only <Text style={{ color: "#e77" }}>Child-2</Text> style prop
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

  const styleTextFormat = (obj) => {
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
  };
  const createStyleText = () => {
    let parent, children, child2;
    parent = styleTextFormat({
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems,
      flexWrap: flexWrap,
      alignContent: alignContent,
    });
    children = styleTextFormat({
      flex: flex,
    });
    child2 = styleTextFormat({
      flexGrow: flexGrow,
      flexShrink: flexShrink,
      flexBasis: flexBasis,
      alignSelf: alignSelf,
    });
    return `  parent: {
    flex: 1,
${parent}
  },
  chidren: {
${children}
  },
  child-2: {
${child2}
  },`;
  };

  const TabBarComponent = () => {
    if (tab == false) {
      return (
        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              setTab(true);
            }}>
            <Text style={styles.tabBarInfoText}>open style text</Text>
          </TouchableOpacity>
        </View>
      );
    }
    const styleText = createStyleText();
    return (
      <View style={styles.tabBarInfoContainer}>
        <TextInput
          style={styles.tabBarStyleForm}
          multiline={true}
          editable={false}
          value={styleText}
        />
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            setTab(false);
          }}>
          <Text style={styles.tabBarInfoText}>close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.createrContainer}>
          <Text style={styles.subTitleText}>Preview</Text>
          <PreviewContainer />
          <Text style={styles.subTitleText}>Property selecter</Text>
          <CustomerContainer />
        </View>
      </ScrollView>
      <TabBarComponent />
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
  createrContainer: {
    flex: 1,
    padding: 10,
    maxWidth: 400,
  },
  customerContainer: {
    flex: 3,
    flexDirection: "row",
  },

  parentCustomer: {
    flex: 1,
    backgroundColor: "#eee",
    paddingHorizontal: 4,
  },
  childCustomer: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.surface,
    paddingHorizontal: 4,
  },

  parent: {
    backgroundColor: Colors.surface,
    padding: 10,
    flex: 1,
  },
  children: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: "#666",
    padding: 2,
  },
  previewText: {
    color: Colors.text,
  },

  styleProp: {
    borderWidth: 1,
  },

  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  titleText: {
    fontSize: 20,
    color: Colors.text,
    lineHeight: 24,
    textAlign: "center",
  },
  subTitleText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 24,
    textAlign: "center",
    paddingTop: 6,
  },
  h1Text: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
    textAlign: "center",
  },
  h2Text: {
    fontSize: 12,
    color: Colors.text,
    lineHeight: 20,
    textAlign: "center",
    paddingTop: 6,
  },
  stylePropText: {
    fontSize: 12,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 6,
  },

  picker: {
    height: 20,
    width: 60,
    borderRadius: 4,
  },
  pickerItem: {},

  openButton: {
    width: "100%",
  },

  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: "#666",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 6,
  },
  tabBarInfoText: {
    fontSize: 15,
    paddingVertical: 5,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  tabBarStyleForm: {
    fontSize: 12,
    width: "80%",
    height: 250,
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.surface,
    borderRadius: 4,
    textAlignVertical: "top",
  },
});
