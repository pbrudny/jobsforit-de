import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import style from "./style.module.scss";
import PhotoSwipeWrapper from "../PhotoSwipeWrapper/PhotoSwipeWrapper";

function GallerySlider(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleOpen = index => {
        setIsOpen(true);
        setIndex(index);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return(
        <div className={style.GallerySlider}>
            <Swiper
                spaceBetween={8}
                slidesPerView={1.5}
                centeredSlides={true}
            >
                {props.items.map((item, i) => (
                    <SwiperSlide
                        className={style.GallerySlider__slide}
                        key={i}
                        onClick={() => {
                            handleOpen(i);
                        }}
                    >
                        <div className={style.GallerySlider__slideInner}>
                            <img
                            src={item.src}
                            className={style.GallerySlider__img}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <PhotoSwipeWrapper isOpen={isOpen} index={index} items={props.items} onClose={handleClose} />
        </div>
    )
}

export default GallerySlider;