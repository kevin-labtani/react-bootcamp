import React, { createContext } from "react";
import todoReducer from "../reducers/todo.reducer.js";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();
// split between 2 provider for performance reason, otherwise everything rerenders when we eg: toggle a single todo
// then bellow we pass direclty the todos and dispatch rather than destricturing it {todos} vs {{todos}} as there's a signel object now and if de destrucutred it'd make a new object everytime

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
