import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Platform } from "react-native";
import SlidingTabForAuthScreen from "../components/SlidingTabForAuthScreen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Constants from "expo-constants";

const AuthScreen = () => {
  // for loading the comfortaa fonts.....

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
    <SafeAreaView style={styles.container}>
      <View style={styles.curveContainer}>
        <Text style={styles.logoText}>Help Me</Text>
      </View>

      <SlidingTabForAuthScreen style={styles.formContainer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  curveContainer: {
    width: "120%",
    height: "30%",
    backgroundColor: "#213970",
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 450,
    right: 30,
  },
  logoText: {
    color: "#ffffff",
    fontSize: 44,
    fontFamily: "comfortaa-semiBold",
    left: "27.5%",
    top: "25%",
  },
  formContainer: {
    // flex: 1,
    height: 450,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 34,
    bottom: 60,
    backgroundColor: "#ffffff",
    shadowColor: "#213970",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 8,
  },
});
export default AuthScreen;
