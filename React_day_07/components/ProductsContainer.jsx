import ProductCard from "./ProductCard";
import products from "../products"

export default function ProductsContainer() {
    const data = products;
    return (
        <div className="product_container">
            {
                data.map(product => {
                    return (
                        <ProductCard key={product.id}
                            imageUrl={product.image_url}
                            productName={product.title}
                            brand={product.brand}
                            price={product.price}
                            discountedPrice={product.discounted_price}
                        />
                    )
                })
            }
        </div>
    )
}
