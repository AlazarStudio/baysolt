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
                <WidthBlock className="ContactPageWidthBlock">
                    <ColumnBlock className="ContactPageColumnBlock">

                        <RowBlock backgroundColor={"#081a31"} alignItems={"center"} gap={"20px"} padding={"20px"} borderRadius={"20px"} >
                            <div >
                                <img src={`${geo_img}`} alt="" />
                            </div>
                            <Text color={"#fff"} fontSize={"24px"} >
                                369301 Россия, Карачаево-Черкесская республика, г. Усть-Джегута, ул. Курортная, д.381 корпус А
                            </Text>
                        </RowBlock>

                        <RowBlock backgroundColor={"#081a31"} alignItem={"center"} gap={"20px"} padding={"20px"} borderRadius={"20px"} >
                            <div >
                                <img src={`${phone_img}`} alt="" />
                            </div>
                            <Text color={"#fff"} fontSize={"24px"} >
                                +7 (928) 397 30 00
                            </Text>
                        </RowBlock>

                        <RowBlock backgroundColor={"#081a31"} alignItem={"center"} gap={"20px"} padding={"20px"} borderRadius={"20px"} >
                            <div >
                                <img src={`${mail_img}`} alt="" />
                            </div>
                            <Text color={"#fff"} fontSize={"24px"} >
                                info@monolit-ug.com
                            </Text>
                        </RowBlock>

                    </ColumnBlock>
                    <div className="ContactPageMap">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c940d7b9467e484242384e180fbe55a5795fbf6ed55fdc160bec75a2aa3d02d&amp;source=constructor" width="630" height="100%" frameborder="0"></iframe>
                        {/* <img src={`${main_img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} /> */}
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default ContactPage;