export default function ProductsContainerLoader() {
  return (
    <div className="product_container">
        {
            Array.from({length : 20}).map((el, i)=> {
                return <div key={i} className="product_card_loader">
                    <div className="image_loader"></div>
                    <div className="loading_text"></div>
                    <div className="loading_text"></div>
                    <div className="loading_text"></div>
                </div>
            } )
        }
    </div>
  )
}
