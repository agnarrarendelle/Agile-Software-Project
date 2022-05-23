import React, { Component } from "react";
import "./ListItem.css";

interface Props {
  id: string;
  title: string;
  isDone: boolean;
  addedTime: string;
  checkTodo: (id: string, isDone: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default class ListItem extends Component<Props> {
  handleChange = (id: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      this.props.checkTodo(id, event.target.checked);
    };
  };

  handleClick = (id: string) => {
    return () => {
      if (window.confirm("Are you sure you want to delete this task?")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, title, isDone, addedTime } = this.props;
    return (
      <li>
        <label>
          <input
            type="checkbox"
            defaultChecked={isDone}
            onChange={this.handleChange(id)}
          />
          <span>{`   ${title}  ${addedTime}`}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handleClick(id)}>
          Delete
        </button>
      </li>
    );
  }
}
