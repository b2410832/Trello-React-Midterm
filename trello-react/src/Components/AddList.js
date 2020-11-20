import styles from './AddList.module.css';

function AddList({toggleAddingList, isAddingList, handleInputChange, listInput, addList}) {
    if(isAddingList) {
        return (
            <div className={styles.container}>
                <input className={styles.input} value={listInput} onChange={handleInputChange}/>
                <button className={styles.btn} onClick={addList}>
                    Add List
                </button>
                <button className={styles.btn} onClick={toggleAddingList}>Cancel</button>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={toggleAddingList}>
            + Add a list
            </button>
        </div>
    );
  }
  
  export default AddList;