import * as React from "react";
import SignUp from "./src/Screens/SignUp";
import SignIn from "./src/Screens/SignIn";
import Home from "./src/Screens/Home";
import SlidingTabForHome from "./src/components/SlidingTabForHome";
import QuestionHighlightAll from "./src/components/QuestionHighlight";
import Footer from "./src/components/Footer";
import AuthScreen from "./src/Screens/AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DescribedQuestion from "./src/components/DescribedQuestion";
import AskQuestion from "./src/components/AskQuestion";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AskQuestion">
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="DescribedQuestion" component={DescribedQuestion} />
        <Stack.Screen name="AskQuestion" component={AskQuestion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
