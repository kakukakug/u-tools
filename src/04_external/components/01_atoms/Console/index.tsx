import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  consoleContainer: {
    width: "100%",
    backgroundColor: Colors.text,
  },
  button: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    paddingVertical: 5,
    color: Colors.white,
    textAlign: "center",
  },
  consoleInput: {
    color: Colors.background,
    fontSize: 16,
    height: 250,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
    backgroundColor: Colors.icon,
    borderRadius: 4,
    textAlignVertical: "top",
  },
});

type OuterProps = {
  consoleText: string;
};

export const Console = (props: OuterProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { consoleText } = props;

  if (isVisible === false) {
    return (
      <View style={styles.consoleContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsVisible(true);
          }}>
          <Text style={styles.buttonText}>open output text</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.consoleContainer}>
      <TextInput
        style={styles.consoleInput}
        multiline={true}
        editable={false}
        value={consoleText}
        testID={"console-text"}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setIsVisible(false);
        }}>
        <Text style={styles.buttonText}>close</Text>
      </TouchableOpacity>
    </View>
  );
};
