import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingrediens)
  .map((ingr) => {
    return [...Array(props.ingrediens[ingr])].map((_, i) => {
      return <BurgerIngredients key={ingr + i } type={ingr} />
    })
  }).reduce((arr, el) => [...arr, ...el] ,[]);

  if(!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingrediens</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"/>
        {transformedIngredients} 
      <BurgerIngredients type="bread-bottom"/>

    </div>
  )
}

export default burger;