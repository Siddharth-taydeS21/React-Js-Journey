import { Link } from "react-router-dom";

export default function ProductCard({imageUrl, productName, brand, discountedPrice, price, id, data}) {
  // console.log(id);
  return (
    <Link className="product_card" to={`/${id}`} state={data}>
      <div className="image_wrapper">
        <img src={imageUrl} alt={productName}/>
      </div>
      <div className="product_details">
        <h3 className="product_name">{productName}</h3>
        <p className="brand_name">{brand}</p>
        <div className="price_div">
          <p className="discounted_price">₹{discountedPrice.toLocaleString('en-IN')}</p>
          <p className="price">₹{price.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </Link>
  )
}
