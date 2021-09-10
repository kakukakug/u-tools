import React from "react";
import {
  Linking,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button } from "react-native-paper";

import { Colors } from "../../../styles/Colors";
import { PageTitle } from "../../01_atoms/PageTitle";
import jpeg300 from "../../../assets/images/jpg-300-300.jpg";
import jpeg1000 from "../../../assets/images/jpeg-1000.jpg";
import jpeg1500 from "../../../assets/images/jpeg-1500.jpg";
import png300 from "../../../assets/images/png-300-300.png";
import svg300 from "../../../assets/images/svg-300.svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 30,
  },
  contentContainer: { paddingBottom: 200 },
  listContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    margin: 10,
    alignItems: "center",
  },
  imageText: {
    fontSize: 20,
    color: Colors.text,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export const SampleImageScreen = () => {
  const onPressGif = () => {
    Linking.openURL(
      "https://ja.wikipedia.org/wiki/Graphics_Interchange_Format"
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PageTitle title="サンプル画像素材置き場" />
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.listContainer}>
            <View style={styles.imageContainer}>
              <Image source={jpeg300} style={styles.image} />
              <Text style={styles.imageText}>jpeg 300</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={jpeg1000} style={styles.image} />
              <Text style={styles.imageText}>jpeg 1000</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.imageContainer}>
              <Image source={jpeg1500} style={styles.image} />
              <Text style={styles.imageText}>jpeg 1500</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image source={png300} style={styles.image} />
              <Text style={styles.imageText}>png 300</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={svg300} style={styles.image} />
            <Text style={styles.imageText}>svg 300</Text>
          </View>
          <View style={styles.imageContainer}>
            <Button uppercase={false} mode="text" onPress={onPressGif}>
              gif 画像は wikipedia へのリンク
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
