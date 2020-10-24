import React from "react";
import { Text, StyleSheet } from "react-native";

const AppTextBold = (props) => {
  return (
    <Text style={{ ...styles.defaul, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-bold",
  },
});

export default AppTextBold;
