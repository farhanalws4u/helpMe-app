import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Platform } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import SlidingTabForHome from "../components/SlidingTabForHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Constants from "expo-constants";

const Home = () => {
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
    <SafeAreaView style={styles.container}>
      <Header />
      <SlidingTabForHome />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
export default Home;
