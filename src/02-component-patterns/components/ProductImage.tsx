import { useContext,  } from 'react';
import { ProductContext } from './ProductCard';
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";



export const ProductImage = ({ img = "" }) => {

    const { product } = useContext(ProductContext);
    let imgToshow: string

    if (img) {
        imgToshow = img
    } else if (product.img) {
        imgToshow = product.img
    } else {
        imgToshow = noImage
    }

    return (
        <img className={styles.productImg} src={imgToshow} alt="Product" />
    )
}
