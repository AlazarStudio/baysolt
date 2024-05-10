import React from "react";
import classes from "./FAQ.module.css";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import H2 from "../../Standart/H2/H2";
import Accordion from "../Accordion/Accordion";

import GetData from "../../GetData/GetData";

function FAQ({ children, ...props }) {
  return (
    <>
      <div className={classes.faq}>
        <CenterBlock>
          <WidthBlock>
            <H2 font-size={"32px"} color={"#fff"}>
              Часто задаваемые вопросы
            </H2>

            <GetData tableName="faq">
              {(data) =>
                <div className={classes.accordion_data}>
                  {data.map((item) =>
                  (
                    <Accordion title={item.title}>
                      <div className={classes.accordion_data__desc}>
                        {/* <div className={classes.accordion_data__desc___title}>
                          {item.title}
                        </div> */}

                        <div className={classes.accordion_data__desc___text} dangerouslySetInnerHTML={{ __html: item.text }}>
                          {/* {item.text} */}
                        </div>
                      </div>
                    </Accordion>
                  ))}
                </div>
              }
            </GetData>

          </WidthBlock>
        </CenterBlock>
      </div >
    </>
  );
}

export default FAQ;

