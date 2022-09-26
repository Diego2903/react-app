import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { products } from "../data/products";
import { useShopping } from '../hooks/useShopping';
import "../styles/custom-styles.css";


export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart } = useShopping();

    return (
        <div>

            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>

                {
                    products.map(product => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0} >

                            <ProductImage className="custom-image" />
                            <ProductTitle title="Cafe casero" />
                            <ProductButtons className="custom-bottons" />

                        </ProductCard>
                    ))
                }

                <div className="shopping-cart">

                    {
                        Object.entries(shoppingCart).map(([key, product]) => (
                            <ProductCard
                                key={key}
                                product={product}
                                className="bg-dark text-white"
                                style={{ width: "100px" }}
                                value={product.count}
                                onChange={onProductCountChange}>

                                <ProductImage className="custom-image" />
                                <ProductButtons className="custom-bottons" />

                            </ProductCard>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}