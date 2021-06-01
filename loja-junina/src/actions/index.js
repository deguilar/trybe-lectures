export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: {
    product
  },
})