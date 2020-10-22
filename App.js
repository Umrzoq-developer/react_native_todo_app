import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let content = (
    <MainScreen
      removeTodo={removeTodo}
      handleAddTodo={handleAddTodo}
      todos={todos}
      onOpen={(id) => {
        setTodoId(id);
      }}
    />
  );

  if (todoId) {
    let selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        todo={selectedTodo}
        goBack={() => {
          setTodoId(null);
        }}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
