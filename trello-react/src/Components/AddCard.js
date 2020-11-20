import styles from './AddCard.module.css';

function AddCard({ isAddingCard, toggleAddingCard, handleInputChange, cardInput, AddCard }) {
    if(isAddingCard) {
        return (
            <div className={styles.container}>
                <input className={styles.input} value={cardInput} onChange={handleInputChange}/>
                <button className={styles.btn} onClick={AddCard}>
                    Add Card
                </button>
                <button className={styles.btn} onClick={toggleAddingCard}>X</button>
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