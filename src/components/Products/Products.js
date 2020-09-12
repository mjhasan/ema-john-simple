import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const addCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Products = (props) => {
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="products">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small>Seller : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} in stock - order now</small></p>
                <button className="add-cart-btn"
                onClick={()=> props.addToCard(props.product)}
                >{addCartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Products;