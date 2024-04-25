import React from "react";
import classes from "./Sertificate.module.css";
import H2 from "../../Standart/H2/H2";
import Text from "../../Standart/Text/Text";

function Sertificate({ children, ...props }) {
  return (
    <>
      <div className={classes.sertificate}>
        <H2 font-size={"32px"} color={"var(--color-white)"}>
          СЕРТИФИКАТЫ НА СУХИЕ СТРОИТЕЛЬНЫЕ СМЕСИ
        </H2>

        <Text width={"100%"} text_align={"left"} font_size={"16px"} color={"var(--color-white)"}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto
        </Text>

        <div className={classes.sertificate_items}>
            <div className={classes.sertificate_items__item}></div>
            <div className={classes.sertificate_items__item}></div>
            <div className={classes.sertificate_items__item}></div>
        </div>
      </div>
    </>
  );
}

export default Sertificate;
