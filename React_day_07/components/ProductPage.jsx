import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPageLoader from "./ProductPageLoader";

export default function ProductPage() {
  const param = useParams();
  const id = param.product

  //state variable for setting data in state 
  const [productData, setProductData] = useState(null);

  //state variable for handling error
  const [notFound, setNotFound] = useState(false);

  //start fetch call here  
  useEffect(() => {
    fetch(`https://6a50c67ec576c846dcb9db29.mockapi.io/SiddsOwnRestApi/products/${id}`)
      .then(res =>{

        // then blocks never returns error if the status is 400, 401, 404 or 500 
        // for that situation we need strictly check the response is (200/ok) or not
        if (!res.ok) {
          throw new Error("Product not found");
        }

        return res.json();
      })
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
      .catch((err) => {
        console.log(err);
        console.log('something went wrong');
        setNotFound(true)
      });
    // console.log(productName, id)
  }, [])

  if(notFound){
    return(
       <div style={{ marginTop: '100px' }}>Product Not Found...</div>
      )
  }

  return productData === null ? (
    // we can pass loading component here
    <ProductPageLoader />
  ) : (
    <div className="productPage_container">
      <button className="back_btn" onClick={() => history.back()}>
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