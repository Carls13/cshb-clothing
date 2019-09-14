import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import { 
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Details,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt='item' />
      </ImageContainer>
      <Details>{name}</Details>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>
          &#10095;
        </Arrow>
      </Quantity>
      <Details>{price}</Details>
      <RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
