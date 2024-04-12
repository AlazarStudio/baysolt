import React from "react";
import { Link } from "react-router-dom";
import classes from './Footer.module.css';

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
                        <a href="https://alazarstudio.ru" target="_blank" className={classes.footerImg}>
                            <img src={`${alazar_img}`} alt="" />
                        </a>
                    </div>

                    <div className={classes.footerLinks}>
                    <Link className={classes.footerLink} to="/">Политика конфиденциальности</Link>
                    <Link className={classes.footerLink} to="/">Пользовательское соглашение</Link>
                    </div>

                </section>
            </footer>
        </>
    );
}

export default Footer;