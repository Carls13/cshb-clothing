import React from 'react';

import { CartItemContainer, ItemImage, ItemDetails, Name } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{name}</Name>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
