import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Droppable } from 'react-beautiful-dnd';

import styles from './List.module.css';
import AddCard from './AddCard';
import Card from './Card';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInput: "",
            isAddingCard: false,
            cards: [],
        }
    }

    handleInputChange = (event) => {
        this.setState({
            cardInput: event.target.value
        })
    }

    toggleAddingCard = () => {
        this.setState({
            isAddingCard: !this.state.isAddingCard
        });
    }

    AddCard = () => {
        const { cards, cardInput } = this.state;
        if(cardInput.trim().length === 0) {
            return;
        } 
        const newCards = [
            ...cards,
            {
                id: nanoid(),
                name: cardInput.trim(),
            }
        ]
        this.setState({
            cardInput: "",
            cards: newCards
        });
    }

    render() {
        // const { cards } = this.state;
        // const cardItems = cards.map(card => <Card key={card.id} card={card}/>)

        return (
            <div className={styles.listContainer}>
                <div>{this.props.list.name}</div>
                { this.state.cards.map(card => <Card key={card.id} card={card}/>) }
                <AddCard 
                    isAddingCard={this.state.isAddingCard}
                    toggleAddingCard={this.toggleAddingCard}
                    handleInputChange={this.handleInputChange}
                    cardInput={this.state.cardInput}
                    AddCard={this.AddCard}
                />
            </div>
        )
    }
  }
  
  export default List;