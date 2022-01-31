import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabBarIcon } from "src/04_external/components/01_atoms/TabBarIcon";
import { HomeScreen } from "src/04_external/components/05_pages/HomeScreen";
import { IconsScreen } from "src/04_external/components/05_pages/IconsScreen";
import { ShadowStyleScreen } from "src/04_external/components/05_pages/ShadowStyleScreen";
import { FlexPreviewScreen } from "src/04_external/components/05_pages/FlexPreviewScreen";
import { WebScreen } from "src/04_external/components/05_pages/WebScreen";
import { SampleImageScreen } from "src/04_external/components/05_pages/SampleImageScreen";
import DatetimeTransformScreen from "src/04_external/components/05_pages/DatetimeTransformScreen";
import CompanyNameTransformScreen from "src/04_external/components/05_pages/CompanyNameTransformScreen";
import AddressTransformScreen from "src/04_external/components/05_pages/AddressTransformScreen";

import { Colors } from "src/04_external/styles/Colors";

import { CustomDrawerComponent } from "./CustomDrawerComponent";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function HomeDrawer() {
  const headerOption = {
    title: "React Native U-tools",
  };
  return (
    <Drawer.Navigator drawerContent={CustomDrawerComponent}>
      <Drawer.Screen
        name="ReactNativeHome"
        component={HomeScreen}
        options={headerOption}
      />
    </Drawer.Navigator>
  );
}
function ReactNativeStack() {
  const headerOption = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReactNativeDrawer"
        component={HomeDrawer}
        options={headerOption}
      />
      <Stack.Screen name="Icons" component={IconsScreen} />
      <Stack.Screen name="FlexBox" component={FlexPreviewScreen} />
      <Stack.Screen name="Shadow" component={ShadowStyleScreen} />
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
function WebStack() {
  const headerOption = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WebHome"
        component={WebScreen}
        options={headerOption}
      />
      <Stack.Screen name="SampleImage" component={SampleImageScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const tabBarOptions = {
    tabBarInactiveBackgroundColor: Colors.background,
    tabBarActiveBackgroundColor: Colors.text,
  };
  const reactNativeTabBarIcon = (props: { focused: boolean }) => {
    const { focused } = props;
    return <TabBarIcon focused={focused} name="react" />;
  };
  const webTabBarIcon = (props: { focused: boolean }) => {
    const { focused } = props;
    return <TabBarIcon focused={focused} name="web" />;
  };

  return (
    <Tab.Navigator initialRouteName="ReactNative" screenOptions={tabBarOptions}>
      <Tab.Screen
        name="ReactNative"
        component={ReactNativeStack}
        options={{
          headerShown: false,
          tabBarLabel: "ReactNative",
          tabBarIcon: reactNativeTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Web"
        component={WebStack}
        options={{
          headerShown: false,
          tabBarLabel: "Web",
          tabBarIcon: webTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}
