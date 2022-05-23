import React, { Component } from "react";
import "./TaskBar.css";
import { nanoid } from "nanoid";

//This Interface defines properties passed to component TaskBar
interface Props {
  addTodo: (todoObj: TodoObJ) => void;
}
export default class TaskBar extends Component<Props> {
  add = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { target, key } = event;
    let value = (target as HTMLTextAreaElement).value;
    if (key !== "Enter" || value.trim().length === 0) return;

    const todoObj = {
      id: nanoid(),
      title: value,
      isDone: false,
      addedTime: new Date().toLocaleString(),
    };
    this.props.addTodo(todoObj);

    (event.target as HTMLInputElement).value = "";
  };

  render() {
    const { add } = this;
    return (
      <div className="task-bar">
        <input
          type="text"
          placeholder="Please enter your the name of your task"
          onKeyUp={add}
        />
      </div>
    );
  }
}
