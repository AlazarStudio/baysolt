import React from "react";

import classes from './SectionMain.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import Button from "../../Standart/Button/Button"

function SectionMain({ children, ...props }) {
    return (
        <>
            <ColumnBlock width="100%" gap="80px">
                <div className={classes.mainslider}>
                    <Swiper
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        loop={true}
                        className={classes.mySwiper}
                    >
                        {props.imgs.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className={classes.SectionMain} style={{ backgroundImage: `url(${img})` }}>
                                    <WidthBlock>
                                        <div className={classes.mainBlock}>
                                            <p className={classes.mainText}>TITANIT</p>
                                            <Button>Подробнее</Button>
                                        </div>
                                    </WidthBlock>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </ColumnBlock>
        </>
    );
}

export default SectionMain;
