import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Select } from "native-base";

import { Colors } from "src/04_external/styles/Colors";

const styles = StyleSheet.create({
  customerContainer: {
    flex: 1,
  },

  parentCustomer: {
    backgroundColor: "#f8f8ff",
    borderWidth: 1,
    borderColor: Colors.icon,
    padding: 4,
  },
  childCustomer: {
    backgroundColor: Colors.white,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.icon,
  },

  child2: {
    color: Colors.notification,
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
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 4,
  },
});

type PickerProps = {
  name: string;
  value: string;
  onValueChange: (prop: string) => void;
  selectionArray: string[];
};
const SettingPicker = (data: PickerProps) => {
  const { name, value, onValueChange, selectionArray } = data;
  return (
    <View style={styles.flexRow}>
      <Text style={styles.stylePropText}>{name}</Text>
      <Select
        selectedValue={value}
        variant="filled"
        placeholder="choose props"
        testID={name}
        onValueChange={(itemValue) => {
          onValueChange(itemValue);
        }}>
        {selectionArray.map((label, index) => {
          return (
            <Select.Item
              colorScheme={"trueGray"}
              variant="filled"
              label={label}
              value={label}
              key={index}
            />
          );
        })}
      </Select>
    </View>
  );
};

type OuterProps = {
  flexDirection: string;
  setFlexDirection: (prop: string) => void;
  justifyContent: string;
  setJustifyContent: (prop: string) => void;
  alignItems: string;
  setAlignItems: (prop: string) => void;
  flexWrap: string;
  setFlexWrap: (prop: string) => void;
  flex: string;
  setFlex: (prop: string) => void;
  alignContent: string;
  setAlignContent: (prop: string) => void;
  alignSelf: string;
  setAlignSelf: (prop: string) => void;
  text: string;
  setText: (prop: string) => void;
  flexGrow: string;
  setFlexGrow: (prop: string) => void;
  flexShrink: string;
  setFlexShrink: (prop: string) => void;
  flexBasis: string;
  setFlexBasis: (prop: string) => void;
};
export const SettingComponent = (props: OuterProps) => {
  const {
    flexDirection,
    setFlexDirection,
    justifyContent,
    setJustifyContent,
    alignItems,
    setAlignItems,
    flexWrap,
    setFlexWrap,
    flex,
    setFlex,
    alignContent,
    setAlignContent,
    alignSelf,
    setAlignSelf,
    text,
    setText,
    flexGrow,
    setFlexGrow,
    flexShrink,
    setFlexShrink,
    flexBasis,
    setFlexBasis,
  } = props;
  return (
    <View style={styles.customerContainer}>
      <View style={styles.parentCustomer}>
        <Text style={styles.h1Text}>Parent</Text>
        <SettingPicker
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
        <SettingPicker
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
        <SettingPicker
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
        <SettingPicker
          name={"flexWrap"}
          value={flexWrap}
          onValueChange={setFlexWrap}
          selectionArray={["none", "nowrap", "wrap", "wrap-reverse"]}
        />
        <SettingPicker
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
        <SettingPicker
          name={"text"}
          value={text}
          onValueChange={setText}
          selectionArray={["child", "long text. mega super long text contents"]}
        />
        <SettingPicker
          name={"flex"}
          value={flex}
          onValueChange={setFlex}
          selectionArray={["none", "1", "2"]}
        />
        <Text style={styles.h2Text}>
          only <Text style={styles.child2}>child-2</Text> style prop
        </Text>
        <SettingPicker
          name={"flexGrow"}
          value={flexGrow}
          onValueChange={setFlexGrow}
          selectionArray={["none", "0", "1", "2", "3"]}
        />
        <SettingPicker
          name={"flexShrink"}
          value={flexShrink}
          onValueChange={setFlexShrink}
          selectionArray={["none", "1", "2", "3"]}
        />
        <SettingPicker
          name={"flexBasis"}
          value={flexBasis}
          onValueChange={setFlexBasis}
          selectionArray={["none", "auto", "10", "20", "30"]}
        />
        <SettingPicker
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
