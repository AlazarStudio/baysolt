import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import baysolt_img from "/baysolt.png";

function Header({ children, ...props }) {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isProductionOpen, setIsProductionOpen] = useState(false);
  const location = useLocation();

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsProductionOpen(false); // Закрываем список продукции, если открыт
  };

  const toggleProduction = () => {
    setIsProductionOpen(!isProductionOpen);
    setIsCompanyOpen(false); // Закрываем список компании, если открыт
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? classes.active : "";
  };

  const isDropdownActive = (paths) => {
    return paths.some(path => location.pathname.startsWith(path)) ? classes.active : "";
  };

  return (
    <>
      <header>
        <section className={classes.headerSection}>
          <Link to="/" className={classes.headerImg}>
            <img src={`${baysolt_img}`} alt="" />
          </Link>
          <Link className={`${classes.headerLink} ${isActiveLink("/")}`} to="/">
            Главная
          </Link>

          {/* Продукция */}
          <div className={classes.dropdown}>
            <span className={`${classes.headerLink} ${isDropdownActive(["/production"])}`} onClick={toggleProduction}>
              {isProductionOpen ? "Продукция ⯅" : "Продукция ⯆"}
            </span>
            {isProductionOpen && (
              <div className={classes.dropdownContent}>
                <Link to="/production">Все продукты</Link>
                <Link to="/production?category=Штукатурки">Штукатурки</Link>
                <Link to="/production?category=Шпаклевки">Шпаклевки</Link>
                <Link to="/production?category=Плиточный клей">Плиточный клей</Link>
                <Link to="/production?category=Монтажные смеси">Монтажные смеси</Link>
                <Link to="/production?category=Наливные полы">Наливные полы</Link>
                <Link to="/production?category=Ремонтные смеси">Ремонтные смеси</Link>
                <Link to="/production?category=Пазогребные плиты">Пазогребные плиты</Link>
                <Link to="/production?category=Гибсовые блоки">Гибсовые блоки</Link>
              </div>
            )}
          </div>

          {/* Компания */}
          <div className={classes.dropdown}>
            <span className={`${classes.headerLink} ${isDropdownActive(["/about", "/documents"])}`} onClick={toggleCompany}>
              {isCompanyOpen ? "Компания ⯅" : "Компания ⯆"}
            </span>
            {isCompanyOpen && (
              <div className={classes.dropdownContent}>
                <Link to="/about">О нас</Link>
                <Link to="/documents">Документы</Link>
              </div>
            )}
          </div>

          <Link className={`${classes.headerLink} ${isActiveLink("/contact")}`} to="/contact">
            Контакты
          </Link>
          <Link className={`${classes.headerLink} ${isActiveLink("/feedback")}`} to="/feedback">
            Обратная связь
          </Link>
          <Link className={`${classes.headerLink} ${classes.linkTel}`} to="tel:+79283073000">
            8 (928) 307-30-00
          </Link>
        </section>
      </header>
    </>
  );
}

export default Header;
