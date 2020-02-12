import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

export default function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    // on pressing enter the form is submited
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm()
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}
