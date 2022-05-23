import React, { Component } from 'react'
import "./Header.css";
import { nanoid } from 'nanoid';

interface Props{
    addTodo:(todoObj: TodoObJ) => void
}
export default class Header extends Component<Props> {
    add = (event:React.KeyboardEvent<HTMLInputElement>  ) => {
        const {target,key} = event;
        let value = (target as HTMLTextAreaElement).value
        //判断是否是回车键
        if(key!=='Enter' || value.trim().length === 0) return;
    
    
        const todoObj = {
          id:nanoid(),
          title:value,
          done:false,
          addedTime: new Date().toLocaleString()
        }
        this.props.addTodo(todoObj);
    
        (event.target as HTMLInputElement).value = "";
      }
    
      render() {
        const {add} = this;
        return (
            <div className="todo-header">
              <input type="text" placeholder="Please enter your the name of your task" onKeyUp={add} />
            </div>
        )
      }
}