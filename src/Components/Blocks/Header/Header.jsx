import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import baysolt_img from "/baysolt.png"

function Header({ children, ...props }) {
  return (
    <>
      <header>
        <section className={classes.headerSection}>
          <Link to="/" className={classes.headerImg}>
            <img src={`${baysolt_img}`} alt="" />
          </Link>
          <Link className={classes.headerLink} to="/">Главная</Link>
          <Link className={classes.headerLink} to="/production">Продукция</Link>
          <Link className={classes.headerLink} to="/about">Компания</Link>
          <Link className={classes.headerLink} to="/contact">Контакты</Link>
          <Link className={classes.headerLink} to="/feedback">Обратная связь</Link>
          <Link className={`${classes.headerLink} ${classes.linkTel}`} to="tel:+79283073000">8 (928) 307-30-00</Link>
          
        </section>
      </header>
    </>
  );
}

export default Header;
