import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../../styles/Colors";

export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={26}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
