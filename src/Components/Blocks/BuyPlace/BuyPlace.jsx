import React from "react";
import classes from "./BuyPlace.module.css";

function formatPhoneNumber(number) {
  // Убираем первую цифру и дефисы
  const formattedNumber = number.slice(1).replace(/-/g, '');
  return `+7${formattedNumber}`;
}

function BuyPlace({ children, ...props }) {
  return (
    <>
      <div className={classes.buyPlace}>
        <div className={classes.buyPlace_item__region}> {props.region} </div>
        <div className={classes.buyPlace_item__title}> {props.title} </div>
        <div className={classes.buyPlace_item__number}>
          <a href={`tel:${formatPhoneNumber(props.number)}`} className={classes.buyPlace_item__number___link}>
            {props.number}
          </a>
          <a href={`tel:${formatPhoneNumber(props.number2)}`} className={classes.buyPlace_item__number___link}>
            {props.number2}
          </a>
          <a href={`tel:${formatPhoneNumber(props.number3)}`} className={classes.buyPlace_item__number___link}>
            {props.number3}
          </a>
        </div>
        <a href={`${props.placeRef}`} target="_blank" className={classes.buyPlace_item__place}> {props.place} </a>
      </div>
    </>
  );
}

export default BuyPlace;
