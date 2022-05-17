import React, { Component } from 'react'
import "./ListItem.css";

export default class Item extends Component {

    handleChange = (id) => {
      return (event) => {
        this.props.checkTodo(id,event.target.checked);
      }
    }
  
    handleClick = (id) => {
      return () => {
        if(window.confirm("确定删除吗?")){
          this.props.deleteTodo(id);
        }
      }
    }
  
    render() {
      const {id,title,done} = this.props;
      const {handleChange,handleClick} = this;
      return (
        <li>
          <label>
            <input type="checkbox" defaultChecked={done} onChange={handleChange(id)}/>
            <span>{title}</span>
          </label>
          <button className="btn btn-danger" onClick={handleClick(id)}>删除</button> 
        </li>
      )
    }
  }