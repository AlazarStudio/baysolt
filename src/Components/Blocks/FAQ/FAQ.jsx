import React from "react";
import classes from "./FAQ.module.css";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import H2 from "../../Standart/H2/H2";
import Accordion from "../Accordion/Accordion";

function FAQ({ children, ...props }) {
  return (
    <>
      <div className={classes.faq}>
        <CenterBlock>
          <WidthBlock>
            <H2 font-size={"32px"} color={"#fff"}>
              Часто задаваемые вопросы
            </H2>

            <div className={classes.accordion_data}>
              <Accordion title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ">
                <div className={classes.accordion_data__desc}>
                  <div className={classes.accordion_data__desc___title}>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                  </div>

                  <div className={classes.accordion_data__desc___text}>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa
                  </div>
                </div>
              </Accordion>

              <Accordion title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ">
                <div className={classes.accordion_data__desc}>
                  <div className={classes.accordion_data__desc___title}>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                  </div>

                  <div className={classes.accordion_data__desc___text}>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa
                  </div>
                </div>
              </Accordion>
              
              <Accordion title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ">
                <div className={classes.accordion_data__desc}>
                  <div className={classes.accordion_data__desc___title}>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                  </div>

                  <div className={classes.accordion_data__desc___text}>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa
                  </div>
                </div>
              </Accordion>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default FAQ;
