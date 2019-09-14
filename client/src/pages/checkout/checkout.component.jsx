import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import { 
CheckoutContainer, 
CheckoutHeader, 
HeaderBlock, 
Total, 
TestWarning, 
CheckoutButton} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>TOTAL: ${total}</Total>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarning>
    <CheckoutButton price={total}/>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
