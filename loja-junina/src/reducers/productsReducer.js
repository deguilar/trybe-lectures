import products from '../products';

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  CLEAR_CART,
} from '../actions/index';

const INITIAL_STATE = {
  products,
  totalValue: 0,
  cartProducts: []
}

function productsReducer(state = INITIAL_STATE, { payload: { product } = {}, type }) {
  switch(type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.concat(product),
        totalValue: state.totalValue + product.price,
      };
    case REMOVE_PRODUCT:
      return state;
    case EDIT_PRODUCT:
      return state;
    case CLEAR_CART:
      return state;
    default:
      return state;
  }
}

export default productsReducer;
