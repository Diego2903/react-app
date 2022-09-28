import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { products } from "../data/products";


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
                    initialValue={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, increaseBy, counter, isMaxCountReached }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />

                            </>
                        )
                    }

                </ProductCard>

            </div>
        </div>
    )
}