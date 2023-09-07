import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_ITEM, TOGGLE_CART } from "../action/actionTypes";

// Load cart data from local storage if available
const initialState = {
    isCartOpen: false,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                isCartOpen: action.payload
            };

        case ADD_TO_CART:
            const itemExist = state.cart.some(item => item.id === action.payload.id);

            if (!itemExist) {
                const updatedCart = [...state.cart, action.payload];
                localStorage.setItem("cart", JSON.stringify(updatedCart)); 
                return {
                    ...state,
                    cart: updatedCart
                };
            } else {
                const updatedCart = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    } else {
                        return item;
                    }
                });
                localStorage.setItem("cart", JSON.stringify(updatedCart)); 
                return {
                    ...state,
                    cart: updatedCart
                };
            }

        case REMOVE_ITEM:
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(updatedCart)); 
            return {
                ...state,
                cart: updatedCart
            };

        case INCREMENT:
            const updatedIncrementCart = state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                } else {
                    return item;
                }
            });
            localStorage.setItem("cart", JSON.stringify(updatedIncrementCart)); 
            return {
                ...state,
                cart: updatedIncrementCart
            };

        case DECREMENT:
            const updatedDecrementCart = state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                } else {
                    return item;
                }
            }).filter(item => item.quantity !== 0);
            localStorage.setItem("cart", JSON.stringify(updatedDecrementCart)); 
            return {
                ...state,
                cart: updatedDecrementCart
            };

        default:
            return state;
    }
};

export default cartReducer;
