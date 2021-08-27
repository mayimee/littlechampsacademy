import React from 'react';
import {ProductConsumer} from './Context';
import Cart from './Cart';

const Navbar = () => {
    return (
        <ProductConsumer>
            {(value)=>{
                const {cart, handleNav, handleCartNav}=value
                return(
                    <div className="contain sticky">
                        <nav className="sticky">
                            <div className="div logo-btn">
                                <div className="cart hide" onClick={handleCartNav}><i className="fas fa-shopping-cart"></i><span>{cart.length}</span></div>
                                <div className="btn" onClick={handleNav}>
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                            <div className="dra">
                                <div className="drawers">
                                    <Cart valueProps={value}/>
                                </div>
                                <span className="carta" onClick={handleCartNav}> Cart<i className="fas fa-shopping-cart cart"><span>{cart.length}</span></i></span>
                            </div>
                        </nav> 
                    </div>
                )
            }}
        </ProductConsumer>
    )
}

export default Navbar
