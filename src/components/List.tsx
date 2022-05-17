import React, { Component } from 'react';
import ListItem from "./ListItem";
import "./List.css";

export default class List extends Component {
    render() {
        const {todos,checkTodo,deleteTodo} = this.props;
        return (
          <ul className="todo-main">
          {
            todos.map(todo => <ListItem key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>)
          }
          </ul>
        )
      }
}