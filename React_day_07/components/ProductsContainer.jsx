import ProductCard from "./ProductCard";
import products from "../products"

export default function ProductsContainer({searchQuery}) {
    let newArray = [];
    const data = products;
    const filteredArray = data.forEach(product => {
        const containsSubstring  =  product.search_tags.some(item => item.includes(searchQuery))
        if (containsSubstring) {
            newArray.push(product)
        }
    })
    return (
        <div className="product_container">
            {
                newArray.map(product => {
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
