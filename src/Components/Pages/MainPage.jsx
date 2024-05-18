import React from "react";
import { Link } from "react-router-dom";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";

import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import H2 from "../Standart/H2/H2";
import Text from "../Standart/Text/Text";
import ProductBlock from "../Blocks/ProductBlock/ProductBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import Benefit from "../Blocks/Benefit/Benefit";
import Request from "../Blocks/Request/Request";
import Provider from "../Blocks/Provider/Provider";
import Sertificate from "../Blocks/Sertificate/Sertificate";
import FAQ from "../Blocks/FAQ/FAQ";
import BuyPlace from "../Blocks/BuyPlace/BuyPlace";
import Partner from "../Blocks/Partner/Partner";

import GetData from "../GetData/GetData";

function MainPage({ children, ...props }) {
  let img = "background_main.png";

  return (
    <>
      <ColumnBlock gap={"80px"} alignItems={"center"}>
        <SectionMain img={img} />

        {/* <GetData tableName="item" /> */}

        <SectionCategory />

        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Популярные товары
          </H2>
        </WidthBlock>

        <GetData tableName="item">
          {(data) =>
            <CenterBlock gap={"40px"} >
              <WidthBlock gap={"40px"}>

                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "45px" }} >
                  {data.slice(0, 6).map((item, index) => (
                    <ProductBlock style={{ borderRadius: "10px" }}
                      key={index}
                      img={item.img}
                      title={item.title}
                      linkTitle={item.id}
                    />
                  ))}
                </div>
              </WidthBlock>
            </CenterBlock>
          }
        </GetData>


        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Наши преимущества
          </H2>
        </WidthBlock>

        <WidthBlock>
          <RowBlock justifyContent={"space-between"} gap={"35px"}>
            <Benefit />
          </RowBlock>
        </WidthBlock>

        <WidthBlock>
          <Request />
        </WidthBlock>

        <Provider />

        <WidthBlock>
          <Sertificate />
          <Link to="/documents" style={{ width: "130px", height: "42px", alignSelf: "flex-end", color: "#fff", fontSize: "14px", padding: "12px 22px", backgroundColor: "#3e85af", cursor: "pointer" }}>
            Подробнее
          </Link>
        </WidthBlock>

        <FAQ />

        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Где купить
          </H2>
        </WidthBlock>

        <WidthBlock>

          <GetData tableName="wherebuy">
            {(data) =>
              <ColumnBlock gap={"15px"}>
                {data.map((item) =>
                (
                  <BuyPlace region={item.region} title={item.title} number={item.number} place={item.place} />
                ))}
              </ColumnBlock>
            }
          </GetData>

        </WidthBlock>

        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Наши партнеры
          </H2>
        </WidthBlock>

        <WidthBlock>
          <RowBlock justifyContent={"space-between"} gap={"35px"}>
            <Partner />
          </RowBlock>
        </WidthBlock>
      </ColumnBlock>
    </>
  );
}

export default MainPage;
