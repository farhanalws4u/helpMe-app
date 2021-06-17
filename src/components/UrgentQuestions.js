import React from "react";
import { ScrollView } from "react-native";
import QuestionHighlight from "./QuestionHighlight";

const UrgentQuestions = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <ScrollView>
      {arr.map((arr) => (
        <QuestionHighlight key={arr} />
      ))}
    </ScrollView>
  );
};

export default UrgentQuestions;
