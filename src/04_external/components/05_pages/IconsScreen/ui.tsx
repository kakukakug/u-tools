import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useToast } from "native-base";
import * as Clipboard from "expo-clipboard";

import { IconFamiliesName } from "src/01_entity/models/vector_icons";

import { Colors } from "src/04_external/styles/Colors";
import { Console } from "src/04_external/components/01_atoms/Console";
import { PageTitle } from "src/04_external/components/01_atoms/PageTitle";
import { FontFamilyItem } from "src/04_external/components/01_atoms/FontFamilyItem";
import { IconItem } from "src/04_external/components/01_atoms/IconItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  sidebar: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: Colors.surface,
  },
  selectIconSet: {},
  iconView: {
    marginHorizontal: 20,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  iconList: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.surface,
  },
  search: {
    backgroundColor: Colors.icon,
    marginBottom: 10,
    padding: 4,
    borderRadius: 4,
  },
  searchInput: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 4,
  },
  emptyComponent: {
    margin: 40,
    padding: 20,
    backgroundColor: Colors.white,
  },
  emptyText: {
    fontSize: 30,
    color: Colors.text,
  },
});

type OuterProps = {
  icons: string[];
  setVisibleIccons: (selectFamily: string, searchText: string) => void;
};

export const IconsScreenUI = (props: OuterProps) => {
  const [searchText, setSearchText] = useState("");
  const [selectIcon, setSelectIcon] = useState("");
  const [consoleText, setConsoleText] = useState("");
  const [family, setFamily] = useState("AntDesign");
  const toast = useToast();

  const { icons, setVisibleIccons } = props;

  useEffect(() => {
    const sampleCode = `import { ${family} } from "@expo/vector-icons";

<${family} name="${selectIcon}" size={20} color="#666" />`;
    setConsoleText(sampleCode);
  }, [family, selectIcon]);

  const onChangeText = useCallback(
    (prop) => {
      setVisibleIccons(family, prop);
      setSearchText(prop);
    },
    [family, setVisibleIccons]
  );

  const onPressFamily = useCallback(
    (prop) => {
      setSelectIcon("");
      setFamily(prop);
      setVisibleIccons(prop, searchText);
    },
    [searchText, setVisibleIccons]
  );

  const showToast = useCallback((iconName: string) => {
    toast.show({
      title: "copy icon name to clipbord",
      description: iconName,
      duration: 3000,
      status: "info",
    });
  }, []);

  const onPressIcon = useCallback((prop) => {
    setSelectIcon(prop);
    Clipboard.setString(prop);
    showToast(prop);
  }, []);

  const emptyComponent = () => {
    return (
      <View style={styles.emptyComponent}>
        <Text style={styles.emptyText}>no result</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PageTitle title="@expo/vector-icons preview" />
        <View style={styles.main}>
          <View style={styles.sidebar}>
            <View style={styles.search}>
              <TextInput
                placeholder={"search icon name"}
                style={styles.searchInput}
                onChangeText={onChangeText}
              />
            </View>
            <FlatList
              style={styles.selectIconSet}
              data={IconFamiliesName}
              renderItem={({ item }) => {
                return (
                  <FontFamilyItem
                    name={item}
                    selectFamily={family}
                    onPress={onPressFamily}
                  />
                );
              }}
            />
          </View>

          <View style={styles.iconView}>
            <FlatList
              data={icons}
              renderItem={({ item }) => {
                return (
                  <IconItem
                    name={item}
                    selectFamily={family}
                    onPress={onPressIcon}
                  />
                );
              }}
              style={styles.iconList}
              contentContainerStyle={styles.contentContainer}
              numColumns={6}
              ListEmptyComponent={emptyComponent}
            />
          </View>
        </View>
      </View>
      <Console consoleText={consoleText} />
    </View>
  );
};
