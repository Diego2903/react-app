import { Props as PropsBottons } from '../components/ProductButtons';
import { Props as PropsCard } from '../components/ProductCard';
import { Props as PropsImage } from '../components/ProductImage';
import { Props as PropsTitle } from '../components/ProductTitle';




export interface Product {
    id: string;
    title: string;
    img?: string;
    className?: string;
}

export interface ProductContextProps {

    counter: number;
    increaseBy: (value: number) => void
    product: Product
}

export interface ProductCardProps {
    ({ children, product }: PropsCard) : JSX.Element,
    Image:  (Props: PropsImage) => JSX.Element,
    Title:  (Props: PropsTitle) => JSX.Element,
    Buttons:(Props: PropsBottons) => JSX.Element
}