import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css"

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummarys}>
      <div style={{ width: "100%", margin: "auto" }}>
        <h1>We hope it taste well!</h1>
        <Burger ingrediens={props.ingrediens} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
