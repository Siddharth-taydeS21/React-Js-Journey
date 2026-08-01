export default function ProductCard({imageUrl, productName, brand, discountedPrice, price}) {
  return (
    <div className="product_card">
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
    </div>
  )
}
