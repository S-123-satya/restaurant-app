import React from "react";
import CartItem from "./CartItem/CartItem";
import items from "./dummy-meals";
import Card from "../UI/Card";

const MealsItems = () => {
  return (
    <Card>
      {items.map((item) => (
        <CartItem
          key={item.id}
          summary={item.description}
          price={item.price}
          name={item.name}
          amount={0}
        />
      ))}
    </Card>
  );
};

export default MealsItems;
