import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import baysolt_img from "/baysolt.png"

function Header({ children, ...props }) {
  return (
    <>
      <header>
        <section className={classes.headerSection}>
          <div className={classes.headerImg}>
            <img src={`${baysolt_img}`} alt="" />
          </div>
          <Link to="/">Главная</Link>
          <Link to="/production">Продукция</Link>
          <Link to="/about">Компания</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/feedback">Обратная связь</Link>
          <Link className={classes.linkTel} to="tel:+79283073000">8 (928) 307-30-00</Link>
        </section>
      </header>
    </>
  );
}

export default Header;
