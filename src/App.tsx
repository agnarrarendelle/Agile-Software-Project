
import React, { Component } from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Bottom from "./components/Bottom";
import "./App.css";



class App extends Component {
  state = {
    todos:[
      {id:"001",title:"吃饭",done:true},
      {id:"002",title:"睡觉",done:true},
      {id:"003",title:"打豆豆",done:false}
    ]
  }

  addTodo = (todoObj:TodoObJ) => {
    const {todos} = this.state;
    const newTodos = [todoObj,...todos];
    this.setState({
      todos:newTodos
    })
  }

  checkTodo = (id:string,done:boolean) => {
    const {todos} = this.state;
    const newTodos = todos.map(todoObj => {
      if(todoObj.id === id) return {...todoObj,done:done}
      else return todoObj;
    })
    this.setState({
      todos:newTodos
    })
  }

  deleteTodo = (id:string) => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos:newTodos
    })
  }

  checkAllTodo = (done:boolean) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      return {...todo,done};
    })
    this.setState({todos:newTodos});
  }

  clearAllTodoDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => !todo.done );
    this.setState({todos:newTodos});
  }

  render() {
    const {todos} = this.state;
    const {addTodo,checkTodo,deleteTodo} = this;
    
    return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo}/>
        <List todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        <Bottom todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodoDone={this.clearAllTodoDone}/>
      </div>
    </div>
    )
  }
}

export default App
