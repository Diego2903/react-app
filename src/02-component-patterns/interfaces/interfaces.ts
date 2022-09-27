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
    product: Product;
    maxCount?: number
}

export interface ProductCardProps {
    ({ children, product }: PropsCard) : JSX.Element,
    Image:  (Props: PropsImage) => JSX.Element,
    Title:  (Props: PropsTitle) => JSX.Element,
    Buttons:(Props: PropsBottons) => JSX.Element
}


export interface onChangeArgs {
    count : number,
    product : Product
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValue {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    counter : number;
    isMaxCountReached : boolean;
    maxCount? : number;
    product : Product;
    increaseBy : (value : number) => void;
    reset : () => void;
}