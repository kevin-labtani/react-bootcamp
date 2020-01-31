import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ task: "buy food", id: uuid() }]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  delTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const tasks = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        delTodo={() => this.delTodo(todo.id)}
      />
    ));

    return (
      <div>
        <h1>Todo List</h1>
        {tasks}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
