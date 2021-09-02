import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";

import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Zocial,
  Fontisto,
} from "@expo/vector-icons";
import { Colors } from "../../../styles/Colors";

import { Icons, IconFamiliesName } from "../../../common/iconsConst";

const IconFamilies = {
  Octicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json"),
};

export const IconsScreen = () => {
  const [family, setFamily] = useState("AntDesign");
  const [searchText, setSearchText] = useState("");
  const [icons, setIcons] = useState(Icons.AntDesign);

  const presetIcons = useEffect(() => {
    const tempIcons = Icons[family];

    console.log(searchText);
    if (searchText === "") {
      setIcons(tempIcons);
      return;
    }
    const re = new RegExp(`.*${searchText}.*`, "g");
    const filterdIcons = tempIcons.filter((icon) => {
      return re.test(icon);
    });
    setIcons(filterdIcons);
  }, [family, searchText]);

  const onPressIcon = (props) => {
    Clipboard.setString(props);
  };

  const emptyComponent = () => {
    return (
      <View style={styles.emptyComponent}>
        <Text style={styles.emptyText}>no result</Text>
      </View>
    );
  };
  const familyItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setFamily(item);
        }}
        style={[
          styles.familyButton,
          item === family
            ? { backgroundColor: Colors.primary }
            : { backgroundColor: Colors.surface },
        ]}>
        <Text style={styles.familyText}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const iconItem = ({ item, index }) => {
    switch (family) {
      case "AntDesign":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <AntDesign name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Octicons":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Octicons name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Entypo":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Entypo name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "EvilIcons":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <EvilIcons name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Feather":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Feather name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "FontAwesome":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <FontAwesome name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "FontAwesome5":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <FontAwesome5 name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Foundation":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Foundation name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Ionicons":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Ionicons name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "MaterialIcons":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <MaterialIcons name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "MaterialCommunityIcons":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <MaterialCommunityIcons name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "SimpleLineIcons":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <SimpleLineIcons name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Zocial":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Zocial name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      case "Fontisto":
        return (
          <TouchableOpacity
            onPress={() => {
              onPressIcon(item);
            }}
            style={styles.iconButton}>
            <Fontisto name={item} size={42} color={Colors.icon} />
            <Text style={styles.iconName}>{item}</Text>
          </TouchableOpacity>
        );
      default:
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>@expo/vector-icons preview</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.sidebar}>
            <FlatList
              style={styles.selectIconSet}
              data={IconFamiliesName}
              renderItem={familyItem}
            />
            <View style={styles.search}>
              <TextInput
                placeholder={"search icon name"}
                style={styles.searchInput}
                onChangeText={setSearchText}
              />
            </View>
          </View>

          <View style={styles.iconView}>
            <FlatList
              data={icons}
              renderItem={iconItem}
              style={styles.iconList}
              contentContainerStyle={styles.contentContainer}
              numColumns={8}
              ListEmptyComponent={emptyComponent}
            />
          </View>
        </View>
        <View style={styles.code}>
          <Text style={styles.codeText}>CODE</Text>
          <Text style={styles.codeText}>CODE</Text>
          <Text style={styles.codeText}>CODE</Text>
          <Text style={styles.codeText}>CODE</Text>
        </View>
      </View>
    </View>
  );
};

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
  title: { marginVertical: 20 },
  titleText: { fontSize: 38, color: Colors.text },
  main: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    padding: 20,
    borderColor: "#888",
    borderWidth: 1,
    border: "solid",
  },
  selectIconSet: {},
  familyButton: {
    backgroundColor: Colors.surface,
    padding: 10,
    marginVertical: 4,
  },
  familyText: {
    color: Colors.text,
  },
  code: {
    backgroundColor: Colors.text,
    padding: 10,
    marginVertical: 20,
    borderRadius: 6,
  },
  codeText: {
    backgroundColor: Colors.icon,
    color: "#fff",
    padding: 6,
  },
  iconView: {
    marginHorizontal: 20,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  iconList: {
    width: 760,
    backgroundColor: Colors.surface,
  },
  search: {
    backgroundColor: Colors.surface,
    marginTop: 10,
    padding: 4,
    borderRadius: 4,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 4,
  },
  preview: {
    flex: 1,
    padding: 20,
  },
  iconButton: {
    width: 80,
    margin: 4,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconName: {
    margin: 4,
    color: Colors.text,
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
