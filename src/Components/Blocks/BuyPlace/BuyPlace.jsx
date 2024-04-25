import React from "react";
import classes from "./BuyPlace.module.css";

function BuyPlace({ children, ...props }) {
  return (
    <>
      <div className={classes.buyPlace}>
        <div className={classes.buyPlace_item}>"Sed ut perspiciatis</div>
        <div className={classes.buyPlace_item}> unde omnis iste </div>
        <div className={classes.buyPlace_item}>+7 (928) 307 30 00</div>
        <div className={classes.buyPlace_item}>
          natus error sit voluptatem accusantium doloremque
        </div>
      </div>
    </>
  );
}

export default BuyPlace;
