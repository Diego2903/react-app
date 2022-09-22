import { ProductCard as ProductCardHOC } from './ProductCard';

// export { ProductCard } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard : ProductCardProps = Object.assign( ProductCardHOC, {
    Image : ProductImage,
    Title : ProductTitle,
    Buttons : ProductButtons,
});



export default ProductCard;