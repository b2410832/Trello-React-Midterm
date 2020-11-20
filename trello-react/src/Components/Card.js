import { Draggable } from 'react-beautiful-dnd';

import styles from './Card.module.css';

function Card({ card }) {
    return (
        <div className={styles.cardContainer}>
            {card.name}
        </div>
    );
  }
  
  export default Card;