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

            <CenterBlock className="DocumentPageCenterBlock">

                <Text color={"#fff"} fontSize={"24px"}> ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ И СЕРТИФИКАТЫ НА СУХИЕ СТРОИТЕЛЬНЫЕ СМЕСИ </Text>

                <WidthBlock flexDirection={"row"}>
                    <GetData tableName="certificate">
                        {(data) =>
                            <div className="DocumentPageCertificateBlock">
                                {data.slice(0, 3).map((item) =>
                                (
                                    <div className="DocumentPageCertificate">
                                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`admin/img/${item.img}`} alt="" srcset="" />
                                    </div>
                                ))}
                            </div>
                        }
                    </GetData>
                </WidthBlock>
            </CenterBlock>
            <GetData tableName="docs">
                {(data) =>
                    <CenterBlock className="DocumentPageDocumentsCenterBlock">
                        {data.map((item) =>
                        (
                            <WidthBlock className="DocumentPageDocuments" backgroundColor={"#112E4F"} borderRadius={"10px"}>
                                <Text color={"#fff"}>{item.title + "." + getFileExtension(item.img)}</Text>

                                <Button onClick={() => window.open(`/admin/img/${item.img}`)}>
                                    Смотреть
                                    {/* check */}
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