export default function SearchBar() {
    return (
        <div className="search_category_container">
            <label htmlFor="search_input" id="search_label">
                <i className="ri-search-line"></i>
                <input type="text" id="search_input" placeholder="Search products"/>
            </label>

            <select name="category" className="category_input">
                <option value="">Show products by category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="beauty">Beauty</option>
            </select>
        </div>
    )
}
