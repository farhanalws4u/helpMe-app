import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={{ ...styles.buttonText, ...props.textStyling }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#213970",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CustomButton;
