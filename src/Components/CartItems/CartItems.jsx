import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'
import { Link } from 'react-router-dom';

export default function CartItems() {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return (<div>
                                <div className='cartitems-format cartitems-format-main' style={{textDecoration:'none'}}>
                                <Link to={`/product/${e.id}`}><img src={e.image} alt="" className='carticon-product-icon'/></Link>
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                                </div>
                            </div>)
                }
                else{
                    return null
                }
            })}
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shiping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <duv className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </duv>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='promo code'/>
                        <button>SUbmit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

