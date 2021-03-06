import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  // we don't want to return an empty <Paper> if there are no todos cuz it's ugly so we return null instead
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {/* no divider after last todo */}
              {i < todos.length - 1 ? <Divider /> : ""}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
