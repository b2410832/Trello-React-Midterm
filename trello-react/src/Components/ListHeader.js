import styles from './ListHeader.module.css';

function ListHeader({ list, toggleEditing, removeList, handleListInputChange, updateListName}) {
    if(list.isEditing) {
        return (
            <div className={styles.header}>
                <input className={styles.input} type="text" value={list.pendingName} onChange={(e) => handleListInputChange(e, list.id)} placeholder={list.name}/>
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={() => updateListName(list.id)}>Save</button>
                    <button className={styles.btn} onClick={() => toggleEditing(list.id)}>Cancel</button>
                    <div className={styles.close} onClick={() => removeList(list.id)}>&#10005;</div>
                </div>
            </div>  
        )
    }
    return (
        <div className={styles.header}>
            <div className={styles.title}>{list.name}</div>
            <div className={styles.btns}>
                <button onClick={() => toggleEditing(list.id)}>Edit</button>
                <div className={styles.close} onClick={() => removeList(list.id)}>&#10005;</div>
            </div>
        </div>    
    )
}

export default ListHeader;