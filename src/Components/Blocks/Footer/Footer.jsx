import React from "react";
import { Link } from "react-router-dom";
import classes from './Footer.module.css';
import Text from "../../Standart/Text/Text";

import baysolt_img from "/baysolt.png"
import alazar_img from "/alazar.png"


function Footer({ children, ...props }) {
    return (
        <>
            <footer>
                <section className={classes.footerSection}>

                    <div className={classes.footerImgs}>
                        <Link to="/" className={classes.footerImg}>
                            <img src={`${baysolt_img}`} alt="" />
                        </Link>
                        <div className={classes.footerNav}>
                            <Text padding="10px 0" fontSize="20px" >Продукция</Text>
                            <Link className={classes.footerLink} to="/production?category=Штукатурки">Штукатурки</Link>
                            <Link className={classes.footerLink} to="/production?category=Шпаклевки">Шпаклевки</Link>
                            <Link className={classes.footerLink} to="/production?category=Плиточный клей">Плиточный клей</Link>
                            <Link className={classes.footerLink} to="/production?category=Монтажные смеси">Монтажные смеси</Link>
                        </div>

                        <div className={classes.footerNav}>
                            <Text padding="10px 0" fontSize="20px" >Продукция</Text>
                            <Link className={classes.footerLink} to="/production?category=Наливные полы">Наливные полы</Link>
                            <Link className={classes.footerLink} to="/production?category=Ремонтные смеси">Ремонтные смеси</Link>
                            <Link className={classes.footerLink} to="/production?category=Пазогребные плиты">Пазогребные плиты</Link>
                            <Link className={classes.footerLink} to="/production?category=Гибсовые блоки">Гибсовые блоки</Link>
                        </div>
                        <div className={classes.footerNav}>
                            <Text padding="10px 0" fontSize="20px" >Компания</Text>
                            <Link className={classes.footerLink} to="/about">О нас</Link>
                            <Link className={classes.footerLink} to="/documents">Документы</Link>
                            <Link className={classes.footerLink} to="/documents">Документы</Link>
                            <Link className={classes.footerLink} to="/#wherebuy">Где купить</Link>

                        </div>
                        <div className={classes.footerNav}>
                            <Text padding="10px 0" fontSize="20px" >Контакты</Text>
                            <Link className={classes.footerLink} to="tel:+79283073000">
                                8 (928) 307-30-00
                            </Link>

                        </div>
                    </div>

                    <div className={classes.footerLinks}>
                        <Text>Copyright © 2024 <a className={classes.footerLink} href="https://alazarstudio.ru" target="_blank">ALAZAR STUDIO.</a> All rights reserved.</Text>

                        <a href="https://alazarstudio.ru" target="_blank" className={classes.footerImg}>
                            <img src={`${alazar_img}`} alt="" />
                        </a>
                        {/* <Link className={classes.footerLink} to="/">Политика конфиденциальности</Link> */}
                        {/* <Link className={classes.footerLink} to="/">Пользовательское соглашение</Link> */}
                    </div>

                </section>
            </footer>
        </>
    );
}

export default Footer;