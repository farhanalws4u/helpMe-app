import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Footer = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.containerOne}>
        <TouchableOpacity style={styles.touchable} activeOpacity={0.7}>
          <Image
            style={styles.image}
            source={require("../../assets/question.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTwo}>
        <TouchableOpacity style={styles.touchable} activeOpacity={0.7}>
          <Image
            style={styles.image}
            source={require("../../assets/bulb.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerThree}>
        <TouchableOpacity style={styles.touchable} activeOpacity={0.7}>
          <Image
            style={styles.image}
            source={require("../../assets/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    height: 53,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "#808080",
  },
  image: {
    height: 30,
    width: 30,
  },
  containerOne: {
    flex: 1,
    alignItems: "center",
    height: 45,
    borderRightWidth: 0.6,
    justifyContent: "center",
    borderColor: "#808080",
  },
  containerTwo: {
    flex: 1,
    alignItems: "center",
    height: 45,
    borderRightWidth: 0.8,
    justifyContent: "center",
    borderColor: "#808080",
  },
  containerThree: {
    flex: 1,
    alignItems: "center",
    height: 45,
    paddingRight: 1.5,
    justifyContent: "center",
    borderColor: "#808080",
  },
});
export default Footer;
