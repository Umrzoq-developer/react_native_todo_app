import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
      Keyboard.dismiss();
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
        keyboardType="default"
      />
      <AntDesign.Button onPress={pressHandler} name="pluscircleo">
        Add Todo
      </AntDesign.Button>
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
    width: "60%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});

export default AddTodo;

// <Button title="AddTodo" onPress={pressHandler} />
