import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "buy cat food", completed: false },
    { id: 2, task: "clean house", completed: true },
    { id: 3, task: "renew train pass", completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  // add a new todo
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  // remove a todo
  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  // toggle completion
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // edit todo
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar position="static" color="primary" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
