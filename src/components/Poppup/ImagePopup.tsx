import React from 'react';
import style from './style.module.scss';

interface ImagePopupProps {
    isOpen: boolean;
    images: string[];
    onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, images, onClose }) => {
    if (!isOpen) return null;

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return (
        <div className={style['popup']} onClick={handleBackgroundClick}>
            <div className={style['popup__content']}>
                <button className={style['popup__close']} onClick={onClose}>X</button>
                {images.map((item, index) => (
                    <img key={index} src={item} alt="img" className={style['popup__img']} />
                ))}
            </div>
        </div>
    );
};

export default ImagePopup;
