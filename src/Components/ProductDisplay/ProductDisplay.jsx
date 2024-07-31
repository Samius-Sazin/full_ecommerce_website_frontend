import React from 'react'
import './ProductDisplay.css'
import startIcon from '../Assets/star_icon.png'
import starDullIcon from '../Assets/star_dull_icon.png'

const ProductDisplay = ({ product }) => {
    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">${product.old_price}</div>
                    <div className="product-display-right-price-new">${product.new_price}</div>
                </div>
                <div className="product-display-right-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, aliquam pariatur. Nam magni, suscipit aspernatur deleniti, eveniet error enim accusamus consectetur amet quidem nesciunt fugiat!
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>Xl</div>
                        <div>XXl</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='product-display-right-category'><span>Category : </span> Women, T-Shirt, Crop Top</p>
                <p className='product-display-right-category'><span>Tags : </span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
