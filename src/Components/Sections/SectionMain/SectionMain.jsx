import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import classes from './SectionMain.module.css';
import Button from "../../Standart/Button/Button"

function SectionMain({ children, ...props }) {
    return (
        <>

            <section className={classes.SectionMain} style={{ backgroundImage: `url('/${props.img}')` }}>
                <div className={classes.mainBlock}>
                    <p className={classes.mainText}>TITANIT</p>
                    <Button>Подробнее</Button>
                </div>
            </section>
            
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {/* <SwiperSlide>
                    <section className={classes.SectionMain} style={{ backgroundImage: `url('/${props.img}')` }}>
                        <div className={classes.mainBlock}>
                            <p className={classes.mainText}>TITANIT</p>
                            <Button>Подробнее</Button>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className={classes.SectionMain} style={{ backgroundImage: `url('/${props.img}')` }}>
                        <div className={classes.mainBlock}>
                            <p className={classes.mainText}>TITANIT</p>
                            <Button>Подробнее</Button>
                        </div>
                    </section>
                </SwiperSlide> */}

            </Swiper>

        </>
    );
}

export default SectionMain;