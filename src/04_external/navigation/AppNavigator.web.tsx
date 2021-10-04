import React, { useRef, useCallback } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createURL } from "expo-linking";

import { TabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  // https://reactnavigation.org/docs/screen-tracking
  const routeNameRef = useRef<string | undefined>();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
    //    setCurrentScreen("Home");
  }, []);

  const prefix = createURL("/");

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        ReactNative: {
          screens: {
            ReactNativeDrawer: {
              screens: {
                ReactNativeHome: "",
              },
            },
            Icons: "Icons",
            FlexBox: "FlexBox",
            Shadow: "Shadow",
          },
        },
        Web: {
          screens: {
            WebHome: "WebHome",
            SampleImage: "SampleImage",
          },
        },
        NotFound: "*",
      },
    },
  };
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
      linking={linking}
      ref={navigationRef}
      independent={true}
      onReady={onReady}>
      <TabNavigator />
    </NavigationContainer>
  );
};
