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
                    <CenterBlock gap={"40px"} >
                        <RowBlock width={"1300px"} gap={"40px"}>
                            <ColumnBlock width={"50%"} height={"565px"} padding={"80px 40px"} backgroundColor={"#112E4F"}>
                                <img src={`/admin/img/${data[4]}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </ColumnBlock>
                            <ColumnBlock width={"50%"} height={"565px"} padding={"80px 40px"} backgroundColor={"#112E4F"}>
                                <Text color={"#fff"}>
                                    {data[1]}
                                </Text>
                                <Text color={"#fff"}>
                                    {data[1]}
                                </Text>
                            </ColumnBlock>
                        </RowBlock>

                        <WidthBlock height={"100%"} padding={"80px 40px"} backgroundColor={"#112E4F"}>
                            <Text color={"#fff"}>
                                {data[2]}
                            </Text>
                        </WidthBlock>

                    </CenterBlock>
                }
            </GetDataItem>
        </>
    );
}

export default ProductPage;