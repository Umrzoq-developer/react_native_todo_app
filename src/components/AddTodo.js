import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleTextChange = (text) => {
    setValue(text);
  };

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Name of todo can not be empty!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Name todo..."
        onChangeText={handleTextChange}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="number-pad"
      />
      <Button title="AddTodo" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});

export default AddTodo;
