import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View>
        <Button title="Back" onPress={goBack} />
        <Button
          title="Delete"
          color="#ff0000"
          onPress={() => console.log("To Remove", todo.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoScreen;
