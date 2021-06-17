import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import UrgentQuestions from "./UrgentQuestions";
import AllQuestions from "./AllQuestions";

const { width } = Dimensions.get("window");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class SlidingButton extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = (type) => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          marginTop: Platform.OS === "android" ? 22 : 0,
        }}
      >
        <View
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              height: 32,
              position: "relative",
              borderRadius: 25,
            }}
          >
            <Animated.View
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "#213970",
                borderRadius: 25,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#213970",
                borderRadius: 25,
                borderRightWidth: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({ active: 0 }, () => this.handleSlide(xTabOne))
              }
            >
              <Text
                style={{
                  color: active === 0 ? "#fff" : "#213970",
                }}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#213970",
                borderRadius: 25,
                borderLeftWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))
              }
            >
              <Text
                style={{
                  color: active === 1 ? "#fff" : "#213970",
                }}
              >
                Urgent
              </Text>
            </TouchableOpacity>
          </View>

          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabOne,
                },
              ],
            }}
            onLayout={(event) =>
              this.setState({
                translateY: event.nativeEvent.layout.height,
              })
            }
          >
            <AllQuestions />
          </Animated.View>

          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabTwo,
                },
                {
                  translateY: -translateY,
                },
              ],
            }}
          >
            <UrgentQuestions />
          </Animated.View>
        </View>
      </View>
    );
  }
}
