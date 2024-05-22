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
                            <Text padding="0 0 10px 0" fontSize="20px" >Продукция</Text>
                            <Link className={classes.footerLink} to="/production?category=Штукатурки">Штукатурки</Link>
                            <Link className={classes.footerLink} to="/production?category=Шпаклевки">Шпаклевки</Link>
                            <Link className={classes.footerLink} to="/production?category=Плиточный клей">Плиточный клей</Link>
                            <Link className={classes.footerLink} to="/production?category=Монтажные смеси">Монтажные смеси</Link>
                        </div>

                        <div className={classes.footerNav}>
                            <Text padding="0 0 10px 0" fontSize="20px" >Продукция</Text>
                            <Link className={classes.footerLink} to="/production?category=Наливные полы">Наливные полы</Link>
                            <Link className={classes.footerLink} to="/production?category=Ремонтные смеси">Ремонтные смеси</Link>
                            <Link className={classes.footerLink} to="/production?category=Пазогребные плиты">Пазогребные плиты</Link>
                            <Link className={classes.footerLink} to="/production?category=Гибсовые блоки">Гибсовые блоки</Link>
                        </div>
                        <div className={classes.footerNav}>
                            <Text padding="0 0 10px 0" fontSize="20px" >Компания</Text>
                            <Link className={classes.footerLink} to="/about">О нас</Link>
                            <Link className={classes.footerLink} to="/documents">Документы</Link>
                        </div>
                        <div className={classes.footerNav}>
                            <Text padding="0 0 10px 0" fontSize="20px" >Контакты</Text>
                            <Link className={classes.footerLink} to="tel:+79283973000">
                                8 (928) 397-30-00
                            </Link>
                            <Link className={classes.footerLink} target="_blank" to={"https://yandex.ru/maps/11019/ust'-dzheguta/house/kurortnaya_ulitsa_381a/YEgYfwFoSkwFQFpufXx0cHhmbA==/?ll=41.968391%2C44.051459&z=17"}>
                                369301 Россия, Карачаево-Черкесская республика, <br /> г. Усть-Джегута, ул. Курортная, д.381 корпус А
                            </Link>
                            <Text color={"#afafaf"}> 
                                info@monolit-ug.com
                            </Text>

                        </div>
                    </div>

                    <div className={classes.footerLinks}>
                        <Text>Copyright © 2024 BAYSOLT <br /> All rights reserved.</Text>

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