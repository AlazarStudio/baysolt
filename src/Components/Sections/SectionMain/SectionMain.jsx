import React from "react";
import classes from './SectionMain.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import GetData from "../../GetData/GetData";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import Button from "../../Standart/Button/Button"

function SectionMain({ children, ...props }) {
    return (
        <>
            <ColumnBlock width="100%" gap="80px">
                <div className={classes.mainslider}>
                    <GetData tableName="slider">
                        {(data) => (
                            <Swiper
                                navigation={true}
                                pagination={{ clickable: true }}
                                modules={[Autoplay, Navigation, Pagination]}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                  }}
                                className={classes.mySwiper}
                            >
                                {data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={classes.SectionMain} style={{ backgroundImage: `url(/admin/img/${item.img})` }}>
                                            <WidthBlock>
                                                <div className={classes.mainBlock}>
                                                    <p className={classes.mainTitle}>{item.title}</p>
                                                    <p className={classes.mainText} dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                                    <Button link={item.link}>
                                                        Подробнее
                                                    </Button>
                                                </div>
                                            </WidthBlock>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </GetData>
                </div>
            </ColumnBlock >
        </>
    );
}

export default SectionMain;
