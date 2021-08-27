/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';


const Cart = (props) => {
    const {cartOpen, closeNavCart, handleCartNav, shipping} = props.valueProps;
    return (
        <ProductConsumer>
            {value=>{
                const {cart, total, deleteItem, increaseItem, decreaseItem} = value;
                return(
                    <ul className={cartOpen ? ' newCartNav cartNav cartItem' : 'cartNav cartItem'}>

                        {cart.length === 0 ?
                        <div>
                            <span className="inside-btn" onClick={handleCartNav}>X</span>
                            <div className='empty'>
                                Your cart is currently empty.
                            </div>
                        </div>:
                        <div className="cartItem">
                        <span className="inside-btn" onClick={handleCartNav}>X</span>

                        {cart.map(product => {
                            return(
                                <div className="cart-center" key={product.id}>
                    <div className="img-cart">
                        <img src={product.img} src={`/${product.img}`} alt="img" />
                    </div>

                                    <div className="item">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="inc-dec-cart">
                                        <button onClick={()=>decreaseItem(product.id)}>-</button>
                                        {product.count}
                                        <button onClick={()=>increaseItem(product.id)}>+</button>
                                    </div>

                                    <div className="price-cart">
                                        <p>₱ {product.price*product.count}</p>
                                    </div>
                                    <div className="del-item" onClick={()=>deleteItem(product.id)}>
                                        <i className="fa fa-trash"></i>
                                    </div>
                                </div>
                            )
                        })}

                        {/* total */}
                        <div>
                            <p>Free shipping for orders above ₱1,000!</p>
                        </div>
                        <div className="extra-info">
                            <h6><span>Amount: </span>₱{total}</h6>

                            <div className="shipping">
                                <h6><span>Shipping: </span>{total > 1000 ?'Free' : `+₱${shipping}`}</h6>
                            </div>
                            <h4><span>Total amount: </span>₱{total > 1000 ? total : total + shipping}</h4>

                            <div className="payment" onClick={closeNavCart}><Link to='/payment'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                        }
                    </ul>
                )
            }}
        </ProductConsumer>  
    )
}

export default Cart
