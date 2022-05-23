import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

//This Interface defines properties passed to component List
interface Props {
  //An array of todo tasks that will be displayed
  todos: Array<TodoObJ>;
  //An event handler passed from App component to ListItem via List
  checkTodo: (id: string, isDone: boolean) => void;
  //An event handler passed from App component to ListItem via List
  deleteTodo: (id: string) => void;
}

class List extends Component<Props> {
  //When called, this function would first iterate through all tasks passed from App component
  //then extract required properties for ListItem component from each task object(TodoObj)
  //Finally, it would return an array of ListItem components that would be displayed on screen 
  getListItems = () => {
    const listItems = this.props.todos.map((eachTodo) => {
      return (
        <ListItem
          key={eachTodo.id}
          {...eachTodo}
          checkTodo={this.props.checkTodo}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });
    return listItems;
  };

  render() {
    return (
      <ul className="todo-main">
        {this.getListItems()}
      </ul>
    );
  }
}

export default List;
