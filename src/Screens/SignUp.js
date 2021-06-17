import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomButton from "../components/CustomButton";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
  } else
    return (
      // <SafeAreaView style={styles.container}>
      //   <View style={styles.curveContainer}>
      //     <Text style={styles.logoText}>Help Me</Text>
      //   </View>

      <View style={styles.formContainer}>
        {/* <Text style={styles.formContainerHeading}>Sign Up</Text> */}

        <View>{error !== null && <Text>{error}</Text>}</View>
        <TextInput
          type="text"
          style={styles.input}
          name="displayName"
          value={displayName}
          placeholder="Enter Your Name"
          id="displayName"
          onChangeText={(TextInputValue) => setDisplayName(TextInputValue)}
        />
        <TextInput
          type="email"
          name="userEmail"
          style={styles.input}
          value={email}
          placeholder="Enter Your Email Address"
          id="userEmail"
          onChangeText={(TextInputValue) => setEmail(TextInputValue)}
        />
        <TextInput
          type="password"
          name="userPassword"
          style={styles.input}
          value={password}
          placeholder="Create a Password"
          id="userPassword"
          secureTextEntry={true}
          onChangeText={(TextInputValue) => setPassword(TextInputValue)}
        />

        <CustomButton
          title="Sign Up"
          style={styles.buttonStyles}
          // onPress={(event) =>
          //   // createUserWithEmailAndPasswordHandler(event, email, password)
          // }
        />

        <Text style={{ textAlign: "center", marginTop: 20, marginBottom: -8 }}>
          OR
        </Text>

        <View style={styles.socialLinksContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imageTouchContainer}
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/search.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imageTouchContainer}
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imageTouchContainer}
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/twitter.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", marginTop: 20, marginBottom: -7 }}
          >
            Already have an account?
          </Text>
          <Text style={{ marginTop: 20, color: "#213970", fontWeight: "bold" }}>
            {" "}
            SignIn here
          </Text>
        </View>
      </View>
      // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#ffffff",
  //   paddingTop: Platform.OS === "android" ? 20 : 0,
  // },
  // curveContainer: {
  //   width: "120%",
  //   height: "30%",
  //   backgroundColor: "#213970",
  //   borderBottomStartRadius: 300,
  //   borderBottomEndRadius: 450,
  //   right: 30,
  // },
  // logoText: {
  //   color: "#ffffff",
  //   fontSize: 44,
  //   fontFamily: "comfortaa-semiBold",
  //   left: "27.5%",
  //   top: "25%",
  // },
  // formContainer: {
  //   // flex: 1,
  //   height: 450,
  //   marginLeft: 45,
  //   marginRight: 45,
  //   borderRadius: 34,
  //   bottom: 60,
  //   backgroundColor: "#ffffff",
  //   shadowColor: "#213970",
  //   shadowOffset: {
  //     width: 5,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.5,
  //   elevation: 8,
  // },
  // formContainerHeading: {
  //   textAlign: "center",
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   color: "#213970",
  //   top: 10,
  // },
  input: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAF5",
  },
  buttonStyles: {
    marginRight: 25,
    marginLeft: 25,
    marginTop: 25,
    paddingVertical: 8,
  },
  socialLinksContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 25,
  },
  socialImage: {
    width: 35,
    height: 35,
  },
  imageTouchContainer: {
    backgroundColor: "#ffffff",
    shadowColor: "#213970",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 12,
    borderRadius: 30,
  },
});

export default SignUp;
