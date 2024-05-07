import React from "react";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";

import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import H2 from "../Standart/H2/H2";
import Text from "../Standart/Text/Text";
import ProductBlock from "../Blocks/ProductBlock/ProductBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
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

  let productData = [
    {
      img: "pr1.png",
      title: "ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»",
      linkTitle: "SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»",
      category: "Шпаклевки",
    },
    {
      img: "pr2.png",
      title: "ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»",
      linkTitle: "SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»",
      category: "Штукатурки",
    },
    {
      img: "pr1.png",
      title: "ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»",
      linkTitle: "SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»",
      category: "Наливные полы",
    },
  ];

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

        <WidthBlock>
          <RowBlock justifyContent={"space-between"}>
            {productData.map((item, index) => (
              <ProductBlock
                key={index}
                img={item.img}
                title={item.title}
                linkTitle={item.linkTitle}
              />
            ))}
          </RowBlock>
        </WidthBlock>

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
        </WidthBlock>

        <FAQ />

        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Где купить
          </H2>
        </WidthBlock>

        <WidthBlock>
          <ColumnBlock gap={"15px"}>
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
            <BuyPlace />
          </ColumnBlock>
        </WidthBlock>

        <WidthBlock>
          <H2 font-size={"32px"} color={"#fff"}>
            Наши партнеры
          </H2>
        </WidthBlock>

        <WidthBlock>
          <RowBlock justifyContent={"space-between"} gap={"35px"}>
            <Partner/>
          </RowBlock>
        </WidthBlock>
      </ColumnBlock>
    </>
  );
}

export default MainPage;
