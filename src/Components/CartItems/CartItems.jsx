import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { allProducts, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='cart-items-format-main-hr' />
            {
                allProducts.map((e, i) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={i}>
                                <div className="cart-items-format cart-items-format-main">
                                    <img src={e.image} alt="" className='cart-items-product-img' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img src={removeIcon} className='cart-items-remove-icon' onClick={() => removeFromCart(e.id)} alt="" />
                                </div>
                            </div>
                        )
                    }

                    return null;
                })
            }
            <div className="cart-items-bottom">
                <div className="cart-items-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='hr-style' />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr className='hr-style' />
                        <div className="cart-items-total-item">
                            <h4>Total</h4>
                            <h4>${getTotalCartAmount()}</h4>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="cart-items-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cart-items-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
