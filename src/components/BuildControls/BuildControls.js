import React from "react";
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl";

const controlls = [
  { label: "Salad",  type: "salad" },
  { label: "Bacon",  type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat",   type: "meat" }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    { controlls.map((ctrl) => {
      return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                removed={() => props.ingredientRemoved(ctrl.type)}
                added={() => props.ingredientAdded(ctrl.type)}
                disabled={props.disabled[ctrl.type]} /> 
    })}
  </div>   
)

export default buildControls;