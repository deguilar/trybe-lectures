import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

class ProductsList extends React.Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <>
        <h2>Lista de produtos juninos</h2>
        <ul>
          {products.map((product) => (
            <li>
              <span>{product.name} - R${product.price}</span>
              <button onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.productsReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);