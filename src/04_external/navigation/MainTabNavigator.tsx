import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBarIcon } from "../components/01_atoms/TabBarIcon";
import { HomeScreen } from "../components/05_pages/HomeScreen";
import { IconsScreen } from "../components/05_pages/IconsScreen";
import { FlexPreviewScreen } from "../components/05_pages/FlexPreviewScreen";
import DatetimeTransformScreen from "../components/05_pages/DatetimeTransformScreen";
import CompanyNameTransformScreen from "../components/05_pages/CompanyNameTransformScreen";
import AddressTransformScreen from "../components/05_pages/AddressTransformScreen";

import { Colors } from "../styles/Colors";

const Stack = createStackNavigator();

function ReactNativeStack() {
  const headerOption = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReactNativeHome"
        component={HomeScreen}
        options={headerOption}
      />
      <Stack.Screen name="Icons" component={IconsScreen} />
      <Stack.Screen name="FlexPreview" component={FlexPreviewScreen} />
      <Stack.Screen
        name="Date"
        component={DatetimeTransformScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="Company"
        component={CompanyNameTransformScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="Address"
        component={AddressTransformScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const tabBarOptions = {
    inactiveBackgroundColor: Colors.background,
    style: { backgroundColor: Colors.background },
  };
  const reactNativeTabBarIcon = (props: { focused: boolean }) => {
    const { focused } = props;
    return <TabBarIcon focused={focused} name="react" />;
  };

  return (
    <Tab.Navigator initialRouteName="ReactNative" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="ReactNative"
        component={ReactNativeStack}
        options={{
          headerShown: false,
          tabBarLabel: "ReactNative",
          tabBarIcon: reactNativeTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}
