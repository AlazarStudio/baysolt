import React from "react";
import classes from "./BuyPlace.module.css";

function BuyPlace({ children, ...props }) {
  return (
    <>
      <div className={classes.buyPlace}>
        <div className={classes.buyPlace_item}> {props.region} </div>
        <div className={classes.buyPlace_item}> {props.title} </div>
        <div className={classes.buyPlace_item}> {props.number} </div>
        <div className={classes.buyPlace_item}> {props.place} </div>
      </div>
    </>
  );
}

export default BuyPlace;
