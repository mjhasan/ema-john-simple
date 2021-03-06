import React, { useState } from 'react';
import fakeData from '../../fakeData'
import '../Shop/Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    function addToCard(product) {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Products
                        product={pd}
                        addToCard={addToCard}
                    ></Products>)
                }
            </div>
            <div className="cart-menu">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;