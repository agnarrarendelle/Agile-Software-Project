import React, { Component } from "react";
import "./Bottom.css";

interface Props {
  todos: Array<TodoObJ>;
  checkAllTodo:(done: boolean) => void
  clearAllTodoDone:() => void
}

export default class Footer extends Component<Props> {
  handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.props.checkAllTodo(event.target.checked);
  };

  handleClick = () => {
    this.props.clearAllTodoDone();
  };

  render() {
    const { todos } = this.props;
    const doneTotal = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;

    return (
      <div
        className="todo-bottom"
        style={{ display: total ? "block" : "none" }}
      >
        <label>
          <input
            type="checkbox"
            checked={doneTotal === total && total > 0}
            onChange={this.handleChange}
          />
        </label>
        <span>
          <span>Finished:{doneTotal}</span> / All:{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClick}>
          Clear Finished Tasks
        </button>
      </div>
    );
  }
}
