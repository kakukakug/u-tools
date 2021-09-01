import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/01_atoms/TabBarIcon';
import HomeScreen from '../components/05_pages/HomeScreen';
import DatetimeTransformScreen from '../components/05_pages/DatetimeTransformScreen';
import CompanyNameTransformScreen from '../components/05_pages/CompanyNameTransformScreen';
import AddressTransformScreen from '../components/05_pages/AddressTransformScreen';

const Stack = createStackNavigator();

function HomeStack() {
  const headerOption = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={headerOption} />
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
      <Stack.Screen name="Address" component={AddressTransformScreen} options={headerOption} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const tabBarOptions = {
    inactiveBackgroundColor: "#ffffff",
    style: { backgroundColor: "#ffffff" },
  };
  const homeTabBarIcon = (props: { focused: boolean }) => {
    const { focused } = props;
    return <TabBarIcon focused={focused} name="home-outline" />;
  };

  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarLabel: "Home", tabBarIcon: homeTabBarIcon }}
      />
    </Tab.Navigator>
  );
}


