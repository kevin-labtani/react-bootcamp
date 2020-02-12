import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
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
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} />
    </Paper>
  );
}
