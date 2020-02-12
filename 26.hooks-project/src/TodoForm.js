import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";

export default function TodoForm({ addTodo }) {
  // use custom hook to handle the form state
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}
