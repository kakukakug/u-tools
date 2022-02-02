import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppNavigator } from "src/04_external/navigation/AppNavigator";
import { Colors } from "src/04_external/styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  function handleFinishLoading() {
    setLoadingComplete(true);
  }
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  } else {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </NativeBaseProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...MaterialCommunityIcons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}
