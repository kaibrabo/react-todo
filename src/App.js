import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {

    //  initializes state data
    constructor(props) {
        super(props);

        this.state = {
            // default values
            todos: [
                { description: 'walk', isCompleted: true },
                { description: 'talk', isCompleted: false },
                { description: 'lock', isCompleted: false },
            ],

            // default empty text input
            newTodoDescription: ''
        };
    }

    // submit event handler
    handleSubmit(e) {
        e.preventDefault();

        // new todo item object
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
        // JS Spread Syntax: adds new items to array
        this.setState({ todos: [...this.state.todos, newTodo ], newTodoDescription: '' })

        console.log('handleSubmit called');
    }

    // text input event handler
    handleChange(e) {
        this.setState({ newTodoDescription: e.target.value })

    }

    // event handler for checkbox
    toggleComplete(index) {
        const todos = this.state.todos.slice();
        const todo = todos[index];
        todo.isCompleted = todo.isCompleted ? false : true;
        this.setState({ todos: todos });
    }

    // delete todo event handler
    removeTodo(index) {
        var todos = this.state.todos;
        const todo = index;

        const newTodos = todos.splice(todo, 1);

        this.setState({ todos: todos });

        console.log(index, "index #");
        console.log(newTodos, "new todos");
        console.log(todo, "todo");
        console.log("Clicked");
    }


  render() {
    return (
      <div className="App">
      <h2>
         React To Do
      </h2>

        {/* form: new to-do list item */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>

        {/*list items*/}
        <ul>
            { this.state.todos.map( (todo, index) =>
                <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } removeTodo={ () => this.removeTodo(index)}/>
            )}
        </ul>


      </div>
    );
  }
}

export default App;
