import React, {useContext} from 'react'
import './ProductDisplay.css'
import start_icon from '../Assests/star_icon.png'
import start_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
      </div>
      <div className="productdisplay-right">
        <img className='productdisplay-main-img' src={product.image} alt=''/>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={start_dull_icon} alt=''/>
            <p>(122)</p>
        </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
      </div>
      <div className="productdisplay-right-description">
        fjlajflsjfldkfldsjlj dsfjldskfjdsl jvaldlsdjl 
      </div>
      <div className="productdisplay-right-size">
        <h1 className="">Select Size</h1>
        <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <Link to='/cart'><button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></Link>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
      </div>
      </div>
    </div>
  )
}
