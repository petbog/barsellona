import { useState } from 'react';
import SliderComponent from '../SliderComponent/SliderComponent';
import style from './style.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import './swiper.scss';
import SwiperCore, { Pagination } from 'swiper/core';
import Button from '../UI/Button/Button';
import { cards } from '../../data';
import ImagePopup from '../Poppup/ImagePopup';


// install Swiper modules
// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Pagination]);

const ReviewsSlider = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<string[]>([]);

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleImageClick = (img: string[]) => {
        setCurrentImages(img);
        setPopupOpen(true);
    };

    return (
        <div className={style['reviews']}>
            <div className={style['reviews__title']}>Отзывы о Барселоне</div>
            <div className={style['reviews__slider']}>
                <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{ "clickable": true }} className="mySwiper">
                    {
                        cards.map(card => (
                            <SwiperSlide key={card.id}>
                                <SliderComponent
                                    setPopupOpen={setPopupOpen}
                                    handleImageClick={handleImageClick} 
                                    avatar={card.avatar}
                                    comment={card.comment}
                                    date={card.date}
                                    like={card.like}
                                    name={card.name}
                                    lastname={card.lastname}
                                    text={card.text}
                                    img={card.img}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className={style['reviews__button']}>
                <Button children='Все отзывы' />
            </div>
            <ImagePopup 
                isOpen={isPopupOpen}
                images={currentImages}
                onClose={closePopup}
            />
        </div>
    );
};

export default ReviewsSlider;
