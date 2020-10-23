import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ handleAddTodo, todos, removeTodo, onOpen }) => {
  return (
    <View>
      <AddTodo onSubmit={handleAddTodo} />

      {todos.length ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} onOpen={onOpen} />
          )}
        />
      ) : (
        <View style={styles.imgWrap}>
          <Text>No Data</Text>
          <Image
            style={styles.image}
            source={require("../../assets/no-items.png")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default MainScreen;
