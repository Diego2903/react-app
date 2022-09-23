import { useContext,  } from 'react';
import { ProductContext } from './ProductCard';
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
    className?: string
    img?: string
    style?: React.CSSProperties
}

export const ProductImage = ({ img, className}: Props) => {

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
        <img className={`${styles.productImg} ${className}`} src={imgToshow} alt="Product" />
    )
}
