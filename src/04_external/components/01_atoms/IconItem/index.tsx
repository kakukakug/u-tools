import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Zocial,
  Fontisto,
} from "@expo/vector-icons";

import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  iconButton: {
    width: 120,
    margin: 4,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconName: {
    fontSize: 14,
    margin: 4,
    color: Colors.text,
  },
});

type OuterProps = {
  name: string;
  onPress: (props: string) => void;
  selectFamily: string;
};

const iconSize = 42;

export const IconItem = (props: OuterProps) => {
  const { name, onPress, selectFamily } = props;
  console.log("render icon")
  const getIconConponrnt = () => {
    switch (selectFamily) {
      case "AntDesign":
        return <AntDesign name={name} size={iconSize} color={Colors.icon} />;
      case "Octicons":
        return <Octicons name={name} size={iconSize} color={Colors.icon} />;
      case "Entypo":
        return <Entypo name={name} size={iconSize} color={Colors.icon} />;
      case "EvilIcons":
        return <EvilIcons name={name} size={iconSize} color={Colors.icon} />;
      case "Feather":
        return <Feather name={name} size={iconSize} color={Colors.icon} />;
      case "FontAwesome":
        return <FontAwesome name={name} size={iconSize} color={Colors.icon} />;
      case "FontAwesome5":
        return <FontAwesome5 name={name} size={iconSize} color={Colors.icon} />;
      case "Foundation":
        return <Foundation name={name} size={iconSize} color={Colors.icon} />;
      case "Ionicons":
        return <Ionicons name={name} size={iconSize} color={Colors.icon} />;
      case "MaterialIcons":
        return (
          <MaterialIcons name={name} size={iconSize} color={Colors.icon} />
        );
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={name}
            size={iconSize}
            color={Colors.icon}
          />
        );
      case "SimpleLineIcons":
        return (
          <SimpleLineIcons name={name} size={iconSize} color={Colors.icon} />
        );
      case "Zocial":
        return <Zocial name={name} size={iconSize} color={Colors.icon} />;
      case "Fontisto":
        return <Fontisto name={name} size={iconSize} color={Colors.icon} />;
      default:
        return <></>;
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(name);
      }}
      style={styles.iconButton}>
      {getIconConponrnt()}
      <Text style={styles.iconName}>{name}</Text>
    </TouchableOpacity>
  );
};
