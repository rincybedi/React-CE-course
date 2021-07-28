import React, { Component } from 'react';
import logo from '../MNP.JPG';

export default class todoList extends Component {
  addItem(todoVal) {
    if (todoVal !== '') {
      const newItem = {
        id: Date.now(),
        value: todoVal,
        isChecked: false,
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: '',
      });
    }
  }

  updateInput(input) {
    console.log(input);
    this.setState({ newItem: input });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: '',
    };
  }
  render() {
    return (
      <div>
        <img src={logo} width='100' className='logo' />
        <h1>My App</h1>
        <div className='container'>
          Add an Item..
          <input
            className='input-txt'
            placeholder='Todo'
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
            required
          />
        </div>
        <button
          className='add-btn'
          onClick={(e) => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
        >
          Add Item
        </button>
        <div className='list'>
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  <input
                    type='checkbox'
                    checked={item.isChecked}
                    name='checkbox-test'
                    onChange={() => {}}
                  />
                  {item.value}
                  <button onClick={this.deleteItem(item.id)} className='btn'>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
