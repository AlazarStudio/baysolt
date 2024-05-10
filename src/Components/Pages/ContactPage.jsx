import React from "react";

import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import Text from "../Standart/Text/Text";

import main_img from "/background_main.png";
import phone_img from "/phone.png";
import mail_img from "/mail.png";
import geo_img from "/geo.png";


function ContactPage({ children, ...props }) {
    return (
        <>
            <CenterBlock gap={"80px"} margin={"40px 0"}>
                <Text color={"#fff"} fontSize={"24px"} >Контакты</Text>
                <WidthBlock flexDirection={"row"}>
                    <ColumnBlock width={"420px"} gap={"35px"}>

                        <RowBlock alignItem={"center"} justifyContent={"space-between"} padding={"40px 40px"} borderRadius={"20px"} border={"1px solid #fff"}>
                            <div style={{ height:"40px"}}>
                                <img src={`${geo_img}`} alt="" style={{ width: "100%", objectFit: "cover" }} />
                            </div>
                            <Text color={"#fff"} fontSize={"24px"} >
                                our location
                            </Text>
                        </RowBlock>

                        <RowBlock alignItem={"center"} justifyContent={"space-between"} padding={"40px 40px"} borderRadius={"20px"} border={"1px solid #fff"}>
                            <div style={{ height:"40px"}}>
                                <img src={`${phone_img}`} alt="" style={{ width: "100%", objectFit: "cover" }} />
                            </div>
                            <Text color={"#fff"} fontSize={"24px"} >
                                +7 (928) 307 30 00
                            </Text>
                        </RowBlock>

                        <RowBlock alignItem={"center"} justifyContent={"space-between"} padding={"40px 40px"} borderRadius={"20px"} border={"1px solid #fff"}>
                            <div style={{ height:"40px"}}>
                                <img src={`${mail_img}`} alt="" style={{ width: "100%", objectFit: "cover" }} />
                            </div>
                            <Text color={"#fff"} fontSize={"24px"} >
                                our@gmail.com
                            </Text>
                        </RowBlock>

                    </ColumnBlock>
                    <div style={{ width: "770px", borderRadius: "20px"}}>
                        <img src={`${main_img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default ContactPage;