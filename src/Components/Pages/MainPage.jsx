import React from "react";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";

import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import H2 from "../Standart/H2/H2";
import ProductBlock from "../Blocks/ProductBlock/ProductBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import Benefit from "../Blocks/Benefit/Benefit";

// import img_bg from "/background_main.png";

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
          <RowBlock justifyContent={"space-between"} gap={'35px'}>
            <Benefit />
          </RowBlock>
        </WidthBlock>
      </ColumnBlock>
    </>
  );
}

export default MainPage;
