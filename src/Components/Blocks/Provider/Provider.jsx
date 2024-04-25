import React from "react";
import classes from "./Provider.module.css";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";

function Provider({ children, ...props }) {
  return (
    <>
      <div className={classes.provider}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.provider_block}>
              <div className={classes.provider_block__left}>
                <div className={classes.provider_block__left___title}>
                  BAYSOLT: надежный поставщик строительных смесей
                </div>
                <div className={classes.provider_block__left___points}>
                    <div className={classes.provider_block__left___points____point}>
                        <img src="/yes.png" alt="" />
                        <p>Наличие на складе</p>
                    </div>
                    <div className={classes.provider_block__left___points____point}>
                        <img src="/yes.png" alt="" />
                        <p>Гарантия качества</p>
                    </div>
                    <div className={classes.provider_block__left___points____point}>
                        <img src="/yes.png" alt="" />
                        <p>Сертифицированная продукция</p>
                    </div>
                    <div className={classes.provider_block__left___points____point}>
                        <img src="/yes.png" alt="" />
                        <p>Выгода</p>
                    </div>
                    <div className={classes.provider_block__left___points____point}>
                        <img src="/yes.png" alt="" />
                        <p>Быстрая доставка</p>
                    </div>
                    <div className={classes.provider_block__left___points____point}>
                        <img src="/yes.png" alt="" />
                        <p>Индивидуальный подход</p>
                    </div>
                </div>
              </div>
              <div className={classes.provider_block__right}>
                <div className={classes.provider_block__right___img}>
                    <img src="/logo_letters.png" alt="" />
                </div>
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default Provider;
