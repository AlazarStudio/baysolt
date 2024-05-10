import React from "react";
import classes from './Partner.module.css';

import GetData from "../../GetData/GetData";

function Partner({ children, ...props }) {
    return (
        <>


            <GetData tableName="partner">
                {(data) =>
                    <div className={classes.partner}>
                        {data.map((item) =>
                        (
                            <div className={classes.partner_item}>
                                <div className={classes.partner_item__img}>
                                    <img src={`/admin/img/${item.img}`} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </GetData>


        </>
    );
}

export default Partner;