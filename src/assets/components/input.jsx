import styles from './input.module.css'

const Input=({calVal,clickButton})=>{
    return (
        <div className={styles.inputele}>
            <input type="text" placeholder="Enter number!" className={styles.inp} value={calVal} />
            <button onClick={clickButton}>C</button>
        </div>
    )
}
export default Input;