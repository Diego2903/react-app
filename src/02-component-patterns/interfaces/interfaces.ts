import { ReactElement } from 'react';


export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
}


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {

    counter: number;
    increaseBy: (value: number) => void
    product: Product
}

export interface ProductCardProps {
    ({ children, product }: Props) : JSX.Element,
    Image :  ({ img }: { img?: string | undefined;}) => JSX.Element,
    Title : ({ title }: {title?: string | undefined;}) => JSX.Element,
    Buttons : () => JSX.Element
}