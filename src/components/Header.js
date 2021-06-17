import React from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>Help Me</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.touchable}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/student.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    height: 53,
    flexDirection: "row",
    position: "relative",
    backgroundColor: "#ffffff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  logoText: {
    color: "#213970",
    fontSize: 28,
    fontFamily: "comfortaa-semiBold",
    marginLeft: 20,
  },
  headerImage: {
    height: 38,
    width: 38,
    marginTop: 7.25,
  },
  touchable: {
    flex: 1,
    width: 100,
    marginLeft: 185,
  },
});

export default Header;
