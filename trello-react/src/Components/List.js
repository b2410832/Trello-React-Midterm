import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './List.module.css';
import AddCard from './AddCard';
import ListHeader from './ListHeader';

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

    addCard = () => {
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
    
    // 更新拖拉卡片的新index到react state
    handleOnDragEnd = (result) => {
        // 若拖拉到DragDropContext外面則return
        if(!result.destination) return 
        const cardItems = Array.from(this.state.cards);
        // 從原來位置移除
        const [reorderedCardItems] = cardItems.splice(result.source.index, 1);
        // 插到新的位置
        cardItems.splice(result.destination.index, 0, reorderedCardItems);
        // 更新到state
        this.setState({
            cards: cardItems
        });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.handleOnDragEnd}>
                <Droppable droppableId={this.props.list.id}>
                    {(provided) => (
                        <div className={styles.listContainer} {...provided.droppableProps} ref={provided.innerRef}>
                            <ListHeader 
                                list={this.props.list}
                                toggleEditing={this.props.toggleEditing}
                                removeList={this.props.removeList}
                                handleListInputChange={this.props.handleListInputChange}
                                updateListName={this.props.updateListName}
                            />
                            { this.state.cards.map((card, index) => {
                                return (
                                    <Draggable key={card.id} draggableId={card.id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <div className={styles.cardContainer}>{card.name}</div>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                            <AddCard 
                                isAddingCard={this.state.isAddingCard}
                                toggleAddingCard={this.toggleAddingCard}
                                handleInputChange={this.handleInputChange}
                                cardInput={this.state.cardInput}
                                addCard={this.addCard}
                            />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
  }
  
  export default List;