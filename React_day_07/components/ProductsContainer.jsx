import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductsContainerLoader from "./ProductsContainerLoader";

export default function ProductsContainer({ searchQuery }) {
    const [products, setProducts] = useState([]);
    let newArray = [];

    useEffect(() => {
        // with the help of useEffect hook we can prevent this code from running repeatedly
        fetch('https://6a50c67ec576c846dcb9db29.mockapi.io/SiddsOwnRestApi/products')
            .then(res => res.json())
            .then(data => setProducts(data))

        // this is the unmount call back function 
        return () => {
            console.log('Component Unmounted..!')
        }
    }, []) // we can pass any variables in this Dependency array for monitoring, on the variables change the code will run in the useEffect call back function

    const data = products;
    const filteredArray = data.forEach(product => {
        const containsSubstring = product.search_tags.some(item => item.includes(searchQuery))
        if (containsSubstring) {
            newArray.push(product)
        }
    })

    return products.length === 0 ? (
        <ProductsContainerLoader />
    ) : (
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
                            id={product.id}
                        />
                    )
                })
            }
        </div>
    )
}
