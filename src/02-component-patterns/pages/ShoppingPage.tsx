import { ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components"
import "../styles/custom-styles.css";



const product = {
    id : "1",
    title: "Coffee Mug",
    img : "./coffee-mug.png"
}


export const ShoppingPage = () => (
    <div>

        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>

            <ProductCard product={product} className="bg-dark text-white">

                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title title={"cafe colombia"} />
                <ProductCard.Buttons className="custom-bottons"/>

            </ProductCard> 

            <ProductCard product={product} className="bg-dark text-white">

                <ProductImage className="custom-image"/>
                <ProductTitle  title="Cafe casero"/>
                <ProductButtons className="custom-bottons"/>

            </ProductCard>

            <ProductCard product={product} className="bg-dark text-white" style={{
                backgroundColor : "#000"
            }}>

                <ProductImage className="custom-image"/>
                <ProductTitle  title="Cafe casero"/>
                <ProductButtons className="custom-bottons"/>

            </ProductCard>

        </div>
    </div>
)
