import React, { Component } from 'react'
import "./Header.css";
import { nanoid } from 'nanoid';
export default class Header extends Component {
    add = (event) => {
        const {target,keyCode} = event;
    
        //判断是否是回车键
        if(keyCode!==13) return;
    
        if(!(target.value.trim())) return;
    
        const todoObj = {
          id:nanoid(),
          title:target.value,
          done:false
        }
        this.props.addTodo(todoObj);
    
        target.value = "";
      }
    
      render() {
        const {add} = this;
        return (
            <div className="todo-header">
              <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={add}/>
            </div>
        )
      }
}