import React, {Component} from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {label: 'Drink cofee', important: false, id:1},
      {label: 'Make awasome app', important: true, id:2},
      {label: 'Have a lunch', important: false, id:3},
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArr = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArr,
      }
    });
  }

  addItem = (text) => {
    const newItem = {
     label: text,
     important: false,
     id: this.maxId++,
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem,
      ];

      return {
        todoData: newArr,
      }
    })
  }

  onToggleImportant = (id) => {
    console.log('important', id);
  }

  onToggleDone = (id) => {
    console.log('done', id);
  }
  render() {
    const { todoData } = this.state;
    return (
      <div>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList 
        todos={todoData}
        onDeleted={ this.deleteItem }
        onToggleImportant= {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
       />
       <ItemAddForm 
          onItemAdded = {this.addItem}
       />
    </div>
    )
  }
}
