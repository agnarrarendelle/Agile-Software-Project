import React, { Component } from 'react'
import "./ListItem.css";

interface Props{
    id:string
    title:string
    done:boolean
    checkTodo:(id: string, done: boolean) => void
    deleteTodo:(id: string) => void
}

export default class ListItem extends Component<Props> {

    handleChange = (id:string) => {
      return (event:React.ChangeEvent<HTMLInputElement>) => {
        this.props.checkTodo(id,event.target.checked);
      }
    }
  
    handleClick = (id:string) => {
      return () => {
        if(window.confirm("Are you sure you want to delete this task?")){
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
          <button className="btn btn-danger" onClick={handleClick(id)}>Delete</button> 
        </li>
      )
    }
  }