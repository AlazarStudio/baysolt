import React from "react";

import GetData from "../GetData/GetData";
import GetDataItem from "../GetData/GetDataItem";

import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import Text from "../Standart/Text/Text";
import Button from "../Standart/Button/Button";

import Sertificate from "../Blocks/Sertificate/Sertificate";


function getFileExtension(filename) {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  }

function DocumentsPage({ children, ...props }) {
    return (
        <>

            <CenterBlock gap={"80px"} margin={"40px 0"}>

                <Text color={"#fff"} fontSize={"24px"}> ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ И СЕРТИФИКАТЫ НА СУХИЕ СТРОИТЕЛЬНЫЕ СМЕСИ </Text>
                <WidthBlock flexDirection={"row"}>

                </WidthBlock>
            </CenterBlock>
            <GetData tableName="docs">
                {(data) =>
                    <CenterBlock gap={"20px"}>
                        {data.map((item) =>
                        (
                            <WidthBlock flexDirection={"row"} height={"96px"} alignItems={"center"} justifyContent={"space-between"} padding={"40px"} backgroundColor={"#112E4F"} borderRadius={"10px"}>
                                <Text color={"#fff"}>{item.title + "." + getFileExtension(item.img)}</Text>
                                {/* <a href={`/admin/img/${item.img}`} target={"_blank"} borderRadius={"10px"} backgroundColor={"#3E85AF"} border={"none"}>
                                    Смотреть
                                </a> */}
                                <Button borderRadius={"10px"} backgroundColor={"#3E85AF"} border={"none"} onClick={() => window.open(`/admin/img/${item.img}`)}>
                                    Смотреть
                                </Button>
                            </WidthBlock>
                        ))}

                    </CenterBlock>
                }
            </GetData>


        </>
    );
}

export default DocumentsPage;