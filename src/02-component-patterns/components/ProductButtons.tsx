import { ProductContext } from "./ProductCard"
import { useContext, useCallback } from 'react';
import styles from "../styles/styles.module.css";

export interface Props {
    className?: string;
    style?: React.CSSProperties
}


export const ProductButtons = ({ className }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

 const isMaxReacher = useCallback(
   () => !!maxCount && counter === maxCount,
   [counter, maxCount],
 )
 

    return (

        <div className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={`${styles.buttonAdd} ${ isMaxReacher() && styles.disabled}`} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
}