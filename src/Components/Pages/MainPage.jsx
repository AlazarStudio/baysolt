import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";

import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import H2 from "../Standart/H2/H2";
import Text from "../Standart/Text/Text";
import Button from "../Standart/Button/Button";
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
  let img = "/background_main.png";

  const location = useLocation();
  const wherebuyRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1); // Удаляем #
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <ColumnBlock className="MainPageColumnBlock">
        <SectionMain />

        {/* <GetData tableName="item" /> */}

        <SectionCategory />

        {/* <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Популярные товары
          </H2>
        </WidthBlock>

        <GetData tableName="item">
          {(data) => {
            const favoriteItems = data
              .filter(item => item.favorite && item.favorite.includes("Популярный"))
              .slice(0, 3);

            return (
              <CenterBlock gap={"40px"}>
                <WidthBlock gap={"40px"}>
                  <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "45px" }}>
                    {favoriteItems.map((item, index) => (
                      <ProductBlock
                        style={{ borderRadius: "10px" }}
                        key={index}
                        img={item.img}
                        title={item.title}
                        linkTitle={item.id}
                      />
                    ))}
                  </div>
                </WidthBlock>
              </CenterBlock>
            );
          }}
        </GetData> */}

        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Наши преимущества
          </H2>
        </WidthBlock>

        <WidthBlock className="MainPageBenefit">
          <RowBlock justifyContent={"space-between"} gap={"35px"}>
            <Benefit />
          </RowBlock>
        </WidthBlock>

        <WidthBlock className="MainPageRequest">
          <Request />
        </WidthBlock>

        <Provider />

        {/* <WidthBlock className="MainPageCertificate">
          <Sertificate />
          <Button link="/documents" >
            Подробнее
          </Button>
        </WidthBlock> */}

        <FAQ />

        {/* <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Где купить
          </H2>
        </WidthBlock>

        <WidthBlock id={"wherebuy"} ref={wherebuyRef}>

          <GetData tableName="wherebuy">
            {(data) =>
              <ColumnBlock gap={"15px"}>
                {data.map((item) =>
                (
                  <BuyPlace region={item.region} title={item.title} number={item.number} number2={item.number2} number3={item.number3} place={item.place} placeRef={item.placeref} />
                ))}
              </ColumnBlock>
            }
          </GetData>

        </WidthBlock> */}

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
