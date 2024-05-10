import React from "react";
import classes from "./Sertificate.module.css";
import H2 from "../../Standart/H2/H2";
import Text from "../../Standart/Text/Text";

import GetData from "../../GetData/GetData";

function Sertificate({ children, ...props }) {
  return (
    <>
      <div className={classes.sertificate}>
        <H2 font-size={"32px"} color={"var(--color-white)"}>
          СЕРТИФИКАТЫ НА СУХИЕ СТРОИТЕЛЬНЫЕ СМЕСИ
        </H2>

        <Text width={"100%"} textAlign={"left"} fontSize={"16px"} color={"var(--color-white)"}>
          Мы заботимся о соответствии стандартам качества, чтобы представлять нашим клиентам качественное обслуживание
        </Text>

        <GetData tableName="certificate">
          {(data) =>
            <div className={classes.sertificate_items}>
              {data.slice(0, 3).map((item) =>
              (
                <div className={classes.sertificate_items__item}>
                  <img src={`admin/img/${item.img}`} alt="" srcset="" />
                </div>
              ))}
            </div>
          }
        </GetData>

      </div>
    </>
  );
}

export default Sertificate;
