import React from '/React'
import { render } from '/ReactDom'

function Home({ name }) {
    const array = ['apple', 'mango', 'grapes', 'pine apple']
    return (
        <div>
            <ul>
                {array.map(el => <li>{el}</li>)}
            </ul>
        </div>
    )
}

const div =
    <div>
        <h1>h1 Tag</h1>
        <p>Paragraph Tag</p>
    </div>

function Card({ title, image, brand, price }) {
    return (
        <div className="card">
            <img src={image} alt={title}/>
            <div className="card-content">
            <h3>{title}</h3>
                <p>{brand ? brand : 'Example brand'}</p>
                <p>
                    <b>${price}</b>
                </p>
            </div>
        </div>
    )
}

// render(<Home />, document.getElementById('root'))
// render([<Home />, div, <h1>Siddharth</h1>, 'hii'], document.getElementById('root'))

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          )
        })}
      </div>,
      document.getElementById('root')
    )
  })