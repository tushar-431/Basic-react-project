import styles from './button.module.css'

const Button=({buttonArray,clickButton},props)=>{
    return (
        <div className={styles.buttonContainer}>
            {buttonArray.map((_btn)=>(
                <button className={styles.button} onClick={clickButton}>{_btn}</button>
            ))}
        </div>
    )
}
export default Button;