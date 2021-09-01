import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/01_atoms/TabBarIcon';
import HomeScreen from '../components/05_pages/HomeScreen';
import DatetimeTransformScreen from '../components/05_pages/DatetimeTransformScreen';
import CompanyNameTransformScreen from '../components/05_pages/CompanyNameTransformScreen';
import AddressTransformScreen from '../components/05_pages/AddressTransformScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Date: DatetimeTransformScreen,
    Company: CompanyNameTransformScreen,
    Address: AddressTransformScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
});

tabNavigator.path = '';

export default tabNavigator;
