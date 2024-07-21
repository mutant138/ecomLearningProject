import React from 'react';
import { useCart } from '../../store/CartContext';
import { Badge } from 'react-bootstrap';

const CartIcon = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart"></i>
      <Badge bg="secondary">{totalItems}</Badge>
    </div>
  );
};

export default CartIcon;
