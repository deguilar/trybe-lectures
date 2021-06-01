import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { cartProducts, totalValue } = this.props;
    return (
      <>
        <h2>Carrinho</h2>
        <ul>
          {cartProducts.map((cartProduct) => (
            <li>
              {cartProduct.name}
            </li>
          ))}
        </ul>
        <section>
          <b>Total:</b> {totalValue}
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.productsReducer.cartProducts,
  totalValue: state.productsReducer.totalValue
});

export default connect(mapStateToProps)(Cart);
