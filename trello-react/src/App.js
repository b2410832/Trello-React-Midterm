import React, { Component } from "react";
import { nanoid } from 'nanoid';

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
        isEditing: false,
        pendingName: "",
      }
    ]
    this.setState({
      listInput: "",
      lists: newLists
    });
  }

  removeList = (index) => {
    this.setState({
        lists: this.state.lists.filter((list) => list.id !== index)
    })
  }

  toggleEditing = (index) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.id === index) {
          return {
            ...list,
            isEditing: !list.isEditing,
            pendingName: "",
          }
        }
        return list
      })
    })
  }

  // 編輯List名稱
  handleListInputChange = (event, index) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.id === index) {
          return {
            ...list,
            pendingName: event.target.value,
          }
        }
        return list
      })
    })
  }

  // 儲存List新名稱
  updateListName = (index) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.id === index) {
          return {
            ...list,
            name: list.pendingName,
            isEditing: !list.isEditing,
          }
        }
        return list
      })
    })
  }


  render() {
    return (
      <div>
        <h1 className={styles.title}>Trello</h1>
        <div className={styles.container}>
          { this.state.lists.map(list => 
            <List 
              key={list.id} 
              list={list} 
              removeList={this.removeList} 
              toggleEditing={this.toggleEditing}
              handleListInputChange={this.handleListInputChange}
              updateListName={this.updateListName}
            />)
          }
          <AddList 
            toggleAddingList={this.toggleAddingList}
            isAddingList={this.state.isAddingList}
            listInput={this.state.listInput}
            handleInputChange={this.handleInputChange}
            addList={this.addList}
          />
        </div>
      </div>
    );
  }
}

export default App;
