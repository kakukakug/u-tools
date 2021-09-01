import React, { useRef, useCallback } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";

import { TabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  // https://reactnavigation.org/docs/screen-tracking
  const routeNameRef = useRef<string | undefined>();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
    //    setCurrentScreen("Home");
  }, []);

  /*
  if (__DEV__) {
    // console.log("debug mode on");
    setDebugModeEnabled(true);
  }

  const onStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (currentRouteName && previousRouteName !== currentRouteName) {
      await setCurrentScreen(currentRouteName);
    }

    routeNameRef.current = currentRouteName;
    }, []);
   */

  return (
    <NavigationContainer
      ref={navigationRef}
      independent={true}
      onReady={onReady}>
      <TabNavigator />
    </NavigationContainer>
  );
};
