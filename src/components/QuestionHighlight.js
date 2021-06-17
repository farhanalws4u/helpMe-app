import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";

const QuestionHighlightAll = () => {
  // fonts
  const [fontLoaded, setFontLoaded] = useState(false);

  let loadingFonts = () => {
    // loading our fonts......
    return Font.loadAsync({
      "comfortaa-regular": require("../../assets/fonts/Comfortaa-Regular.ttf"),
      "comfortaa-semiBold": require("../../assets/fonts/Comfortaa-SemiBold.ttf"),
    });
  };

  if (!fontLoaded) {
    // if fonts are not loaded......
    return (
      <AppLoading
        startAsync={loadingFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/student.png")}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.questionTitle}>Need an App Developer</Text>
            <Text style={styles.questionDescription}>
              I want to build an app and I need an.......
            </Text>
            <View style={styles.usernameAndTimeContainer}>
              <Text style={styles.username}>@angelo</Text>
              <Text style={styles.postTime}>2 min ago</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: 95,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    width: "89%",
    height: 95,
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#808080",
    marginLeft: 20,
  },
  image: {
    height: 56,
    width: 56,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 20,
  },
  questionTitle: {
    fontSize: 17,
  },
  questionDescription: {
    fontSize: 13,
    fontFamily: "comfortaa-regular",
  },
  usernameAndTimeContainer: {
    flexDirection: "row",
  },
  username: {
    fontSize: 12,
    color: "#808080",
    marginTop: 2,
  },
  postTime: {
    marginLeft: 20,
    fontSize: 12,
    color: "#808080",
    marginTop: 2,
  },
});

export default QuestionHighlightAll;
