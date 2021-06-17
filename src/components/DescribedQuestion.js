import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SafeAreaView, Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";

function DescribedQuestion() {
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
      <View style={styles.mainContainer}></View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  mainContainer: {
    flex: 1,
  },
});

export default DescribedQuestion;
