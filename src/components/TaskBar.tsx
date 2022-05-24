import React, { Component } from "react";
import "./TaskBar.css";
import { nanoid } from "nanoid";

//This Interface defines properties passed to component TaskBar
interface Props {
  //Event handler defined in App component
  addTodo: (todoObj: TodoObJ) => void;
}
class TaskBar extends Component<Props> {
  //Triggered when users enter anything in the TaskBar
  //First, it checks whether the Users hit Enter Key or do not enter text value
  //and return from the function if either is true
  //Second, it creates a new TodoObj and call addTodo function in App component
  //to add the new task to the Todo List
  //Finally, after the new task has been added to the Todo List
  //it would clear the TaskBar
  add = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { target, key } = event;
    let value = (target as HTMLTextAreaElement).value;
    if (key !== "Enter" || value.trim().length === 0) return;

    const todoObj:TodoObJ = {
      //get an unique ID with the nanoid library
      id: nanoid(),
      title: value,
      isDone: false,
      addedTime: new Date().toLocaleString(),
    };
    this.props.addTodo(todoObj);

    (event.target as HTMLInputElement).value = "";
  };

  render() {
    return (
      <div className="task-bar">
        <input
          type="text"
          placeholder="Please enter your the name of your task"
          onKeyUp={this.add}
        />
      </div>
    );
  }
}

export default TaskBar