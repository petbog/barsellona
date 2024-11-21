import { FC } from 'react';
import style from './style.module.scss';
import likeImg from '../../assets/icons/Symbols.svg';

type SliderComponentType = {
    avatar: string | undefined,
    name: string,
    lastname: string,
    text: string,
    comment: number,
    like: number,
    date: number,
    img: string[],
    setPopupOpen: (value: boolean) => void,
    handleImageClick: (img: string[]) => void 
}

const SliderComponent: FC<SliderComponentType> = ({ handleImageClick, avatar, name, lastname, text, comment, like, date, img }) => {

    const truncatedText = text.length > 118 ? text.slice(0, 118) + '...' : text;

    return (
        <div className={style['slider']}>
            <div className={style['slider__user']}>
                <img className={style['slider__user-avatar']} src={avatar} alt="avatar" />
                <span className={style['slider__user-name']}>{name}</span>
                <span className={style['slider__user-lastname']}>{lastname}</span>
            </div>
            <div className={style['slider__info']}>
                <div className={style['slider__info-box']}>
                    <span className={style['slider__info-sity']}>БАРСЕЛОНА</span>
                    <span className={style['slider__info-sity-subtext']}>— О ГОРОДЕ:</span>
                </div>
                <div className={style['slider__text']}>
                    {truncatedText}
                </div>
                <div className={style['slider__img']} onClick={() => handleImageClick(img)}>
                    {img.length > 4 ? (
                        <>
                            {img.slice(0, 4).map((item, index) => (
                                <img key={index} src={item} alt="img" className={style['slider__img-item']} />
                            ))}
                            <div className={style['slider__img-more']}>
                                +{img.length - 4} 
                            </div>
                        </>
                    ) : (
                        img.map((item, index) => (
                            <img key={index} src={item} alt="img" className={style['slider__img-item']} />
                        ))
                    )}
                </div>
                <div className={style['slider__data']}>
                    <div className={style['slider__data-date']}>{date} год назад</div>
                    <div className={style['slider__data-comment']}>{comment} комментариев</div>
                    <div className={style['slider__data-like']}>
                        <img src={likeImg} alt="like" className={style['slider__data-like-img']} />
                        {like}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;