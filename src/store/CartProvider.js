import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItem = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type==='ADD'){
    const updatedItem=state.items.concat(action.item)
    const updatedTotalAmount=state.totalAmount+ action.item.price * action.item.amount;
    return {items:updatedItem,totalAmount:updatedTotalAmount};
  }
  if(action.type==='REMOVE'){

  }
  return defaultCartItem;
};

const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartItem
  );
  const addItemHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispachCartAction({ type: "remove", id: id });
  };
  const cardContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cardContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
