import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { products } from "../data/products";
import "../styles/custom-styles.css";


const product = products[0];


export const ShoppingPage = () => {

    return (
        <div>

            <h1>Shopping Store</h1>
            <hr />

            <div>

                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValue={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, increaseBy, counter, isMaxCountReached, maxCount }) => (
                            <>
                                <ProductImage className="custom-image" />
                                <ProductTitle title="Cafe casero" />
                                <ProductButtons className="custom-bottons" />

                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}> -2 </button>
                                {
                                    (!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>)
                                }

                                <span>{counter}</span>
                            </>
                        )
                    }

                </ProductCard>

            </div>
        </div>
    )
}