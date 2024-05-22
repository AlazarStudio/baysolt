import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import GetData from "../GetData/GetData";
import GetDataItem from "../GetData/GetDataItem";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import ProductBlock from "../Blocks/ProductBlock/ProductBlock";
import Text from "../Standart/Text/Text";
import Button from "../Standart/Button/Button";

function ProductPage({ children, ...props }) {
    let { id } = useParams();

    const [currentId, setCurrentId] = useState(id);

    useEffect(() => {
        setCurrentId(id);
    }, [id]);

    return (
        <>
            <GetDataItem tableName="item" id={currentId}>
                {(data) =>

                    <CenterBlock gap={"40px"} margin={"60px 0 20px 0"}>
                        <RowBlock width={"1300px"} gap={"40px"}>
                            <ColumnBlock width={"50%"} height={"565px"} padding={"40px"} backgroundColor={"#112E4F"} borderRadius={"20px"}>
                                <img src={`/admin/img/${data[4]}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </ColumnBlock>

                            <ColumnBlock width={"50%"} height={"565px"} padding={"40px"} backgroundColor={"#112E4F"} borderRadius={"20px"} gap={"40px"} justifyContent={"space-between"}>
                                <div className="breadcrumbs">
                                    <Link to="/production">Продукция</Link>
                                    <Link to={`/production?category=${data[3]}`}>{data[3]}</Link>
                                    <span>{data[1]}</span>
                                </div>

                                <Text color={"#fff"} fontSize={"36px"}>{data[1]}</Text>

                                <Text color={"#fff"} fontSize={"16px"} fontWeight={"500"}>
                                    Срок хранения {data[5]}  месяцев с даты изготовления. <br /> <br />
                                    Фасовка {data[6]}кг.  <br /> <br />
                                    {data[7]}
                                </Text>

                                <Button width={"100%"} backgroundColor={"#3e85af"} border={"none"}>Оставить заявку</Button>

                            </ColumnBlock>
                        </RowBlock>

                        <WidthBlock height={"100%"} padding={"40px"} backgroundColor={"#112E4F"} borderRadius={"20px"} gap={"40px"}>

                            <Text color={"#fff"} fontSize={"20px"} fontWeight={"600"} lineHeight={"30px"}>
                                {data[1]}
                            </Text>

                            {/* <Text color={"#fff"} fontSize={"20px"} fontWeight={"400"} lineHeight={"30px"}>
                                {data[2]}
                            </Text>  */}

                            <div className="productText" dangerouslySetInnerHTML={{ __html: data[2] }} />

                            {/* <Text color={"#fff"} fontSize={"20px"} fontWeight={"400"} lineHeight={"50px"}>
                                {data[9]}
                            </Text> */}

                        </WidthBlock>

                    </CenterBlock>


                }
            </GetDataItem>


            <GetData tableName="item">
                {(data) =>
                    <CenterBlock gap={"40px"} margin={"60px 0 40px 0"}>
                        <WidthBlock gap={"40px"}>
                            <Text color={"#fff"} fontSize={"32px"} fontWeight={"600"}>Похожие товары</Text>
                            <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "45px" }} >
                                {data.slice(0, 3).map((item, index) => (
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

        </>
    );
}

export default ProductPage;