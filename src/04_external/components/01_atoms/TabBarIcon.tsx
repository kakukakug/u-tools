import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "src/04_external/styles/Colors";

type OuterProps = {
  name: string;
  focused: boolean;
};

export const TabBarIcon = (props: OuterProps) => {
  const { name, focused } = props;
  return (
    <MaterialCommunityIcons
      name={name}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};
