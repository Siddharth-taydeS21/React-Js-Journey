export default function ProductPageLoader() {
    return (
        <div className="productDetails productDetails_loader">
            <div className="imageWrapper imageWrapper_loader">

            </div>
            <div className="productInfo">
                <div className="product_loading_text"></div>
                <div className="product_loading_text"></div>
                <div className="product_loading_text"></div>
                <div className="product_loading_text"></div>
                <div className="product_loading_text"></div>
                <hr />
                <div style={{display: 'gird', justifyContent: 'start', alignItems: 'end', gap: '10px'}}>
                <div className="product_loading_text"></div>
                <div className="product_loading_text"></div>
                </div>
            </div>
        </div>
    )
}
