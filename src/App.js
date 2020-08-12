import React, { Component } from 'react';
import TodoList from './component/todoItem/todo';
import AddList from './component/addItem/add'


class App extends Component {
  state = {
    items : [
      {id:1, name:'bola', age: 22},
      {id:2, name:'lola', age: 25},
      {id:3, name:'foola', age: 28},
    ]
  }

  deleteItem = (id) => {
    
    //method 1
    /*let items = this.state.items;
    let ind = items.findIndex(item => item.id === id);
    items.splice(ind,1);
    this.setState({items:items})*/

    //method 2
    let items = this.state.items.filter(item => {
      return item.id !==id
    })
    this.setState({items:items})
  } 

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }




  render() {
    return (
        <div className="App container">
          <h1>Todolist App</h1>
          <TodoList items={this.state.items} deleteItem={this.deleteItem}/>
          <AddList addItem={this.addItem} />
        </div>
    )
  }
}

export default App;
