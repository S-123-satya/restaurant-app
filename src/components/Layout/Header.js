import React from "react";
import Icon from "./CartIcon";
import classes from "./Header.module.css";
import iconcss from "./HeaderCartButton.module.css"
import image from "./meals.jpg"

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        
      <button className={iconcss.button}>
        <span className={iconcss.icon}><Icon /></span>
        <span>Your Cart </span>
        <span className={iconcss.badge}> 3</span>
      </button>
      </header>
      <div className={classes['main-image']}>
        <img src={image}  />
      </div>
    </>
  );
};

export default Header;
