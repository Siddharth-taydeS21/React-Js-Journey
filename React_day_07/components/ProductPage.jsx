import { useEffect, useState } from "react";

export default function ProductPage() {
  // 1. Get the query string (?product=shoes&size=9&size=10)
  const queryString = window.location.search;

  // 2. Instantiate URLSearchParams
  const urlParams = new URLSearchParams(queryString);

  // 3. Get individual values
  const productName = urlParams.get('name');
  const id = urlParams.get('id');

  // state variable for setting data in state 
  const [productData, setProductData] = useState(null);

  // start fetch call here  
  useEffect(() => {
    fetch(`https://6a50c67ec576c846dcb9db29.mockapi.io/SiddsOwnRestApi/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductData({
          title: data.title,
          brandName: data.brand,
          imageUrl: data.image_url,
          ratings: data.ratings,
          rating_count: data.rating_count,
          deliveryTime: data.estimated_delivery_time,
          price: data.price,
          discountedPrice: data.discounted_price,
          discountedPercentage: data.discount_percentage
        })
      })
    // console.log(productName, id)
  }, [])


  return productData === null ? (
    // we can pass loading component here
    <div style={{ marginTop: '100px' }}>Loading...</div>
  ) : (
    <div className="productPage_container">
      <button className="back_btn">
        <i className="ri-arrow-left-line"></i>Back
      </button>

      <div className="productDetails">
        <div className="imageWrapper">
          <img src={productData.imageUrl} alt={`${productData.title} image`} />
        </div>
        <div className="productInfo">
          <div>
            <h1 className="productName">{productData.title}</h1>
            <p className="productBrand">{productData.brandName}</p>
          </div>

          <div className="ratingDiv">
            <div className="Starts">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-line"></i>
              <span className="ratings">{productData.ratings}</span>
            </div>
            <div className="ratingsCount">
              <span>({productData.rating_count}) Ratings</span>
            </div>
          </div>

          <div className="deliveryTime">
            Can be Delivered In: <span>{productData.deliveryTime}</span>
          </div>

          <hr />

          <div className="PriceDiv">
            <h1 className="Price">
              ₹{productData.discountedPrice.toLocaleString('en-IN')}
            </h1>
            <div>
              <span className="discountedPrice">₹{productData.price.toLocaleString('en-IN')}</span>
              <span className="discountPercentage">{productData.discountedPercentage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

