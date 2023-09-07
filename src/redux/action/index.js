import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_ITEM, TOGGLE_CART } from "./actionTypes";

export const toggleCart = (toggle) => {
    return {
        type: TOGGLE_CART,
        payload: toggle
    };
};

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    };
};

export const incrItem = (id) => {
    return {
        type: INCREMENT,
        payload: id
    };
};

export const decrItem = (id) => {
    return {
        type: DECREMENT,
        payload: id
    };
};