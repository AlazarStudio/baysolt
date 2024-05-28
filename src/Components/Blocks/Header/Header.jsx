import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import baysolt_img from "/baysolt.png";
import GetData from "../../GetData/GetData";
import ChevronUp from "/icons/chevron-up.png";
import ChevronDown from "/icons/chevron-down.png";
import MenuIcon from "/icons/menu.png";
import CloseIcon from "/icons/close.png";

function Header({ children, ...props }) {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isProductionOpen, setIsProductionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsCompanyOpen(false);
        setIsProductionOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsCompanyOpen(false);
    setIsProductionOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsProductionOpen(false);
  };

  const toggleProduction = () => {
    setIsProductionOpen(!isProductionOpen);
    setIsCompanyOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? classes.active : "";
  };

  const isDropdownActive = (paths) => {
    return paths.some(path => location.pathname.startsWith(path)) ? classes.active : "";
  };

  return (
    <>
      <header ref={headerRef}>
        <section className={classes.headerSection}>
          <Link to="/" className={classes.headerImg}>
            <img src={baysolt_img} alt="Logo" />
          </Link>
          <Link className={`${classes.headerLink} ${isActiveLink("/")}`} to="/">
            Главная
          </Link>

          <div className={classes.dropdown}>
            <span className={`${classes.headerLink} ${isDropdownActive(["/production"])}`} onClick={toggleProduction}>
              Продукция
              {isProductionOpen ?
                <img src={ChevronUp} alt="Chevron Up" className={classes.chevronIcon} />
                :
                <img src={ChevronDown} alt="Chevron Down" className={classes.chevronIcon} />}
            </span>
            {isProductionOpen && (
              <div className={classes.dropdownContent}>
                <Link to="/production" onClick={() => setIsProductionOpen(false)}>Вся продукция</Link>
                <GetData tableName="category">
                  {(data) => (
                    data.map((item) => (
                      <Link key={item.id} to={`/production?category=${item.title}`} onClick={() => setIsProductionOpen(false)}>{item.title}</Link>
                    ))
                  )}
                </GetData>
              </div>
            )}
          </div>

          <div className={classes.dropdown}>
            <span className={`${classes.headerLink} ${isDropdownActive(["/about", "/documents"])}`} onClick={toggleCompany}>
              Компания
              {isCompanyOpen ?
                <img src={ChevronUp} alt="Chevron Up" className={classes.chevronIcon} />
                :
                <img src={ChevronDown} alt="Chevron Down" className={classes.chevronIcon} />}
            </span>
            {isCompanyOpen && (
              <div className={classes.dropdownContent}>
                <Link to="/about" onClick={() => setIsCompanyOpen(false)}>О нас</Link>
                <Link to="/documents" onClick={() => setIsCompanyOpen(false)}>Документы</Link>
                <Link to="/#wherebuy" onClick={() => setIsCompanyOpen(false)}>Где купить</Link>
              </div>
            )}
          </div>

          <Link className={`${classes.headerLink} ${isActiveLink("/contact")}`} to="/contact">
            Контакты
          </Link>
          <Link className={`${classes.headerLink} ${isActiveLink("/feedback")}`} to="/feedback">
            Обратная связь
          </Link>
          <Link className={`${classes.headerLink} ${classes.linkTel}`} to="tel:+79283973000">
            8 (928) 397-30-00
          </Link>
        </section>

        <section className={classes.headerSectionMobile}>
          <Link to="/" className={classes.headerImg}>
            <img src={baysolt_img} alt="Logo" />
          </Link>

          <img
            src={isMobileMenuOpen ? CloseIcon : MenuIcon}
            alt="Menu Icon"
            className={classes.menuIcon}
            onClick={toggleMobileMenu}
          />

          <div className={`${classes.headerBlockMobile} ${isMobileMenuOpen ? classes.show : ''}`}>
            <Link className={classes.headerLink} to="/">Главная</Link>
            <Link className={classes.headerLink} to="/production">Вся продукция</Link>
            <Link className={classes.headerLink} to="/#wherebuy">Где купить</Link>
            <Link className={classes.headerLink} to="/about">О нас</Link>
            <Link className={classes.headerLink} to="/documents">Документы</Link>
            <Link className={classes.headerLink} to="/contact">Контакты</Link>
            <Link className={classes.headerLink} to="/feedback">Обратная связь</Link>
            {/* <Link className={classes.headerLink} to="tel:+79283973000">8 (928) 397-30-00</Link> */}
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
