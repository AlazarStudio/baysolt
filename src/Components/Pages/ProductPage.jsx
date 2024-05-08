import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GetDataItem from "../GetData/GetDataItem";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import Text from "../Standart/Text/Text";

function ProductPage({ children, ...props }) {
    let { id } = useParams();

    return (
        <>
            <GetDataItem tableName="item" id={id}>
                {(data) =>
                    <CenterBlock gap={"40px"} margin={"60px 0 0 0"}>
                        <RowBlock width={"1300px"} gap={"40px"}>
                            <ColumnBlock width={"50%"} height={"565px"} padding={"80px 40px"} backgroundColor={"#112E4F"} borderRadius={"20px"}>
                                <img src={`/admin/img/${data[4]}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </ColumnBlock>

                            <ColumnBlock width={"50%"} height={"565px"} padding={"80px 40px"} backgroundColor={"#112E4F"} borderRadius={"20px"} gap={"40px"} justifyContent={"space-between"}>

                               <Text color={"#fff"} font_size={"16px"} font_weight={"500"}>
                                    {data[1]}
                                </Text>

                                <Text color={"#fff"} font_size={"36px"}>
                                    {data[1]}
                                </Text>

                                <Text styl color={"#fff"} font_size={"16px"} font_weight={"500"}>
                                Срок хранения {data[5]}  месяцев с даты изготовления. <br />
                                Фасовка {data[6]}кг.  <br />
                                ГОСТ {data[7]} <br />
                                Ценв: {data[8]} руб. <br />
                                </Text>

                            </ColumnBlock>
                        </RowBlock>

                        <WidthBlock height={"100%"} padding={"80px 40px"} backgroundColor={"#112E4F"} borderRadius={"20px"}>

                            <Text color={"#fff"} font_size={"20px"} font_weight={"600"} line_height={"30px"}>
                                {data[1]}
                            </Text>

                            {/* <Text color={"#fff"} fontSize={"20px"} fontWeight={"400"} lineHeight={"30px"}>
                                {data[2]}
                            </Text> */}

                            <div style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: data[2] }} />

                            <Text color={"#fff"} font_size={"20px"} font_weight={"400"} line_height={"50px"}>
                                {data[9]}
                            </Text>
                        </WidthBlock>

                    </CenterBlock>
                }
            </GetDataItem>
        </>
    );
}

export default ProductPage;