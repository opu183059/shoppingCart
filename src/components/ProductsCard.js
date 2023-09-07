import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';


const ProductsCard = (props) => {

    const { img, rating, title, price } = props;

    const dispatch = useDispatch();

    return (
        <>
            <div className="product_card">
                <figure>
                    <img src={img} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <h3 className="price">tk. {price.toLocaleString()}</h3>
                <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(addToCart({ ...props }))}
                >
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductsCard;