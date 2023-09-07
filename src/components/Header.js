import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../redux/action';


const Header = () => {

    const { cart } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Shopping Cart</h4>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => dispatch(toggleCart(true))}
                            >
                                <img src="/images/bag-icon.svg" alt="bag-icon" />
                                {cart.length ? <span className="badge">{cart.length}</span> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;