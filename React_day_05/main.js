import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function Card({ id, image, name, brand, price }) {
    // console.log(
    //     <div className="card" key={id}>
    //     <div className="image_wrapper">
    //         <img src={image} alt="image" />
    //     </div>
    //     <h1 className="name">{name}</h1>
    //     <small className="Company">{brand}</small>
    //     <p className="price">${price}</p>
    // </div>
    // )
    return <div className="card" key={id}>
        <div className="image_wrapper">
            <img src={image} alt="image" />
        </div>
        <h1 className="name">{name}</h1>
        <small className="Company">{brand}</small>
        <p className="price">${price}</p>
    </div>
}

// const h1 = <h1>Hello</h1>;
// console.log(h1)

const url = `https://dummyjson.com/products?limit=30&skip=10&select=title,price,brand,thumbnail`;
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
    root.render(
        <div className="container">{
            data.products.map(product => (
                <Card
                key={product.id}
                image={product.thumbnail}
                name={product.title}
                brand={product.brand ?? 'Example Company'}
                price={product.price} />
            ))
        }</div>
    )
})