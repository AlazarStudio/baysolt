import React from "react";
import classes from './Partner.module.css';

function Partner({ children, ...props }) {
    return ( 
        <>
            <div className={classes.partner}>
                <div className={classes.partner_item}>
                    <div className={classes.partner_item__img}>
                        <img src="/partner1.png" alt="" />
                    </div>
                </div>
                <div className={classes.partner_item}>
                    <div className={classes.partner_item__img}>
                        <img src="/partner2.png" alt="" />
                    </div>
                </div>
                <div className={classes.partner_item}>
                    <div className={classes.partner_item__img}>
                        <img src="/partner3.png" alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Partner;