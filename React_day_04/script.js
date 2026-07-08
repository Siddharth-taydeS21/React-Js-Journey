import {createRoot } from "react-dom/client"

console.log('hii, i am using React & react DOM with Parcel setup');
const root = createRoot(document.getElementById('root'));

// const h2 = <h2>Hello Parcel</h2>;

const card = (props) => {
    const {id, image, name, company, price} = props;
    return <div className='card' key={id}>
            <div className="image_wrapper">
                <img src={image} alt="image"/>
            </div>
            <h1 className="name">{name}</h1>
            <h1 className="Company">{company ?? "Example Company"}</h1>
            <h1 className="price">${Math.round(price)}</h1>
    </div>
};

const url = `https://dummyjson.com/products?limit=30&skip=10&select=title,price,brand,thumbnail`;
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
    root.render(
        <div className='container'>
            {data.products.map(product => {
                return card({
                    id: product.id,
                    name : product.title,
                    company : product.brand,
                    image : product.thumbnail,
                    price: product.price
                })
            })}
        </div>
    )
})

// root.render(h2)