import styles from './AddCard.module.css';

function AddCard({ isAddingCard, toggleAddingCard, handleInputChange, cardInput, addCard }) {
    if(isAddingCard) {
        return (
            <div className={styles.container}>
                <input className={styles.input} value={cardInput} onChange={handleInputChange}/>
                <button className={styles.btn} onClick={addCard}>
                    Add Card
                </button>
                <button className={styles.btn} onClick={toggleAddingCard}>Cancel</button>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={toggleAddingCard}>
            + Add a Card
            </button>
        </div>
    );
  }
  
  export default AddCard;