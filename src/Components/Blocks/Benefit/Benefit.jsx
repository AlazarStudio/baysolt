import React from "react";
import classes from "./Benefit.module.css";

function Benefit({ children, ...props }) {
  return (
    <>
      <div className={classes.benefit_item}>
        <div className={classes.benefit_item__img}>
          <img src={"/icons/Check.svg"} alt="" />
          {/* <img src={"admin/img/f1.jpg"} alt="" /> */}
        </div>
        <div className={classes.benefit_item__title}>Сертифицированная продукция </div>
        <div className={classes.benefit_item__desc}>
          Наши смеси прошли строгие сертификационные процедуры, что подтверждает их соответствие высоким стандартам качества и безопасности.
        </div>
      </div>

      <div className={classes.benefit_item}>
        <div className={classes.benefit_item__img}>
          <img src={"/icons/Shield.svg"} alt="" />
          {/* <img src={"admin/img/f1.jpg"} alt="" /> */}
        </div>
        <div className={classes.benefit_item__title}>Гарантия качества </div>
        <div className={classes.benefit_item__desc}>
          Мы гарантируем высокое качество каждой партии нашей продукции благодаря системе контроля качества на всех этапах производства. Это обеспечивает надежность и долговечность наших строительных смесей.
        </div>
      </div>

      <div className={classes.benefit_item}>
        <div className={classes.benefit_item__img}>
          <img src={"/icons/Clock.svg"} alt="" />
          {/* <img src={"admin/img/f1.jpg"} alt="" /> */}
        </div>
        <div className={classes.benefit_item__title}>Быстрая доставка </div>
        <div className={classes.benefit_item__desc}>
          Мы ценим время наших клиентов, поэтому обеспечиваем оперативную доставку продукции прямо на объекты строительства. Наша слаженная логистическая система позволяет минимизировать время ожидания и обеспечивает своевременное выполнение заказов.
        </div>
      </div>
    </>
  );
}

export default Benefit;
