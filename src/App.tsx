import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Bottom from "./components/Bottom";
import "./App.css";

interface States {
  todos: Array<TodoObJ>;
}

class App extends Component<any, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (todoObj: TodoObJ) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({
      todos: newTodos,
    });
  };

  checkTodo = (id: string, isDone: boolean) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, isDone: isDone };
      else return todoObj;
    });
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (id: string) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  checkAllTodo = (isDone: boolean) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, isDone };
    });
    this.setState({ todos: newTodos });
  };

  clearAllTodoDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.isDone);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
          />
          <Bottom
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllTodoDone={this.clearAllTodoDone}
          />
        </div>
      </div>
    );
  }
}

export default App;
