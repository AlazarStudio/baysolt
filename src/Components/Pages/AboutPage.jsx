import React from "react";

import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import Text from "../Standart/Text/Text";

import baysolt_img from "/baysolt_logo.png"
import about_img from "/about1_img.png"
import about_img_1 from "/about_img_small_1.png"
import about_img_2 from "/about_img_small_2.png"
import about_img_3 from "/about_img_small_3.png"
import about_img_4 from "/about_img_small_4.png"

function AboutPage({ children, ...props }) {
    return (
        <>
            <CenterBlock className="AboutPageCenterBlock" >

                <RowBlock className="AboutPageRowBlock" width={"var(--width-block)"} backgroundColor={"#112E4F"} borderRadius={"20px"} justifyContent={"space-between"}>
                    <div style={{ width: "280px" }}>
                        <img src={`${baysolt_img}`} alt="" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                    <Text className="AboutPageText1" color={"#fff"}>
                        ООО «Монолит-ЮГ» за время работы на рынке сухих строительных смесей прошло путь от небольшой фирмы до известной, преимущественно,  по всему югу России высокопрофессиональной компании, специализирующейся на производстве сухих строительных смесей марки «BAYSOLT», а также на выполнении полного спектра сопутствующих работ, а именно, производству штукатурных работ механизированным способом.
                    </Text>
                </RowBlock>

                <WidthBlock className="AboutPageWidthBlock">
                    <Text className="AboutPageText2" color={"#fff"}>
                        Марка «BAYSOLT» гарантирует не только высокое качество производимой продукции, но и предлагает доступные цены и надежность поставок.
                    </Text>
                </WidthBlock>

                <RowBlock className="AboutPageRowBlock2" width={"var(--width-block)"}>
                    <ColumnBlock>
                        <Text className="AboutPageText3" color={"#fff"} >
                            Главный принцип нашей работы - все внимание интересам клиента. Современные технологии, большой опыт  работы, а также тесное сотрудничество с ведущими российскими компаниями - все это позволяет нам содействовать успеху каждого нашего клиента.
                        </Text>
                        <ColumnBlock className="AboutPageColumnBlock2">
                            <RowBlock className="AboutPageRowBlockImg" gap={"40px"}>
                                <img src={`${about_img_1}`} alt="" srcset="" />
                                <Text color={"#fff"}>
                                    Динамичное развитие, стабильное качество продукции
                                </Text>
                            </RowBlock>
                            <RowBlock className="AboutPageRowBlockImg" gap={"40px"}>
                                <img src={`${about_img_2}`} alt="" srcset="" />
                                <Text color={"#fff"}>
                                    Надежность, открытость
                                </Text>
                            </RowBlock>
                            <RowBlock className="AboutPageRowBlockImg" gap={"40px"}>
                                <img src={`${about_img_3}`} alt="" srcset="" />
                                <Text color={"#fff"}>
                                    Высокий профессионализм
                                </Text>
                            </RowBlock>
                            <RowBlock className="AboutPageRowBlockImg" gap={"40px"}>
                                <img src={`${about_img_4}`} alt="" srcset="" />
                                <Text color={"#fff"}>
                                    Активная маркетинговая политика
                                </Text>
                            </RowBlock>
                        </ColumnBlock>
                    </ColumnBlock>
                    <ColumnBlock>
                        <div className="AboutPageImg2">
                            <img src={`${about_img}`} alt="" style={{ width: "100%", objectFit: "cover" }} />
                        </div>
                    </ColumnBlock>

                </RowBlock>
                <WidthBlock>
                    <Text className="AboutPageText3" color={"#fff"}>
                        Производственный комплекс, собственная, оснащенная современным оборудованием лаборатория, профессионализм на всех этапах производства позволяют выпускать продукцию соответствующую самым высоким требованиям.
                        На сегодняшний день, наша компания под торговой маркой «BAYSOLT» выпускает широкий спектр продукции для отделочных работ: штукатурные смеси ручного и механизированного нанесения различной степени прочности,  клеевые смеси для керамической плитки и керамогранита, для ПГП и ГКЛ, для блоков из ячеистого бетона и природного камня, напольные смеси, цементно-песчаные смеси. Продукция марки «BAYSOLT» охватывает весь ценовой спектр продукции предлагаемой на Российском рынке.
                        Постоянное расширение ассортимента продукции, наблюдение за тенденциями рынка сухих строительных смесей, совершенствование технологий производства позволяют наращивать темпы производства и увеличивать сеть сбыта продукции.
                        Продукция торговой марки «BAYSOLT» - гарантия качества и стабильности.
                    </Text>
                </WidthBlock>
            </CenterBlock>

        </>
    );
}

export default AboutPage;