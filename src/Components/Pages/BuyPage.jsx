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
import GetData from "../GetData/GetData";
import BuyPlace from "../Blocks/BuyPlace/BuyPlace";
import H2 from "../Standart/H2/H2";


function BuyPage({ children, ...props }) {
    return (
        <>
            <CenterBlock className="ContactPageCenterBlock">
                <WidthBlock>
                    <H2 font-size={"32px"} color={"#fff"}>
                        Где купить
                    </H2>
                </WidthBlock>

                <WidthBlock id={"wherebuy"}>

                    <GetData tableName="wherebuy">
                        {(data) =>
                            <ColumnBlock gap={"15px"}>
                                {data.map((item) =>
                                (
                                    <BuyPlace region={item.region} title={item.title} number={item.number} number2={item.number2} number3={item.number3} place={item.place} placeRef={item.placeref} />
                                ))}
                            </ColumnBlock>
                        }
                    </GetData>

                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default BuyPage;