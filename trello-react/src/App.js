import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';

import styles from './App.module.css';
import AddList from './Components/AddList';
import List from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInput: "",
      isAddingList: false,
      lists: [],
    }
  }

  handleInputChange = (event) => {
    this.setState({
      listInput: event.target.value
    })
  }

  toggleAddingList = () => {
    this.setState({
      isAddingList: !this.state.isAddingList
    });
  }

  addList = () => {
    const { lists, listInput } = this.state;
    if(listInput.trim().length === 0) {
      return;
    } 
    const newLists = [
      ...lists,
      {
        id: nanoid(),
        name: listInput.trim(),
      }
    ]
    this.setState({
      listInput: "",
      lists: newLists
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.lists.map(list => <List key={list.id} list={list}/>)}
        <AddList 
          toggleAddingList={this.toggleAddingList}
          isAddingList={this.state.isAddingList}
          listInput={this.state.listInput}
          handleInputChange={this.handleInputChange}
          addList={this.addList}
        />
      </div>
    );
  }
}

export default App;
