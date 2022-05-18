import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

interface Props {
  todos: Array<TodoObJ>;
  checkTodo: (id: string, done: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default class List extends Component<Props> {
  render() {
    const { todos, checkTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            {...todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
