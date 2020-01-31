import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  updateTodo(id, updatedTask) {
    // make a new array and replace the task if it's the todo we're looking for
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: newTodos
    });
  }

  delTodo(id) {
    // nb: we don't use the callback form cuz there isn't anything we want to do after the state update happens so it doesn't matter
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleCompletion(id) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: newTodos
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        delTodo={this.delTodo}
        updateTodo={this.updateTodo}
        toggleTodo={this.toggleCompletion}
      />
    ));

    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
