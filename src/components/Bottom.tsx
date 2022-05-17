import React, { Component } from 'react'
import "./Bottom.css";

export default class Footer extends Component {
    render() {
  
      const {todos} = this.props;
      const doneTotal = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0);
      const total = todos.length;
    
      return (
          <div className="todo-footer">
              <label>
                  <input type="checkbox"/>
              </label>
              <span>
                  <span>已完成{doneTotal}</span> / 全部{total}
              </span>
              <button className="btn btn-danger">清除已完成任务</button>
          </div>
      )
    }
  }