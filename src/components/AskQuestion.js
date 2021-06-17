import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SafeAreaView, Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";

function AskQuestion() {
  // fonts
  const [fontLoaded, setFontLoaded] = useState(false);
  const _editor = React.createRef();

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
      <View style={styles.mainContainer}>
        <Text style={styles.mainContainerHeading}>Ask Your Query</Text>
        <QuillEditor
          style={styles.editor}
          ref={_editor}
          initialHtml="<h1>Quill Editor for react-native</h1>"
        />
        <QuillToolbar editor={_editor} options="full" theme="light" />
      </View>
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
    marginLeft: 20,
    marginRight: 20,
  },
  mainContainerHeading: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "comfortaa-semiBold",
    marginTop: 20,
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: "white",
  },
});

export default AskQuestion;
