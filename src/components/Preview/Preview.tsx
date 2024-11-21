import style from './style.module.scss'
import barselona from '../../assets/icons/Vmake-1732091841.png'

const Preview = () => {
    return (
            <div className={style['home']}>
                <div className={style['home__img']}>
                    <img src={barselona} alt='barselona' className={style['home__img-item']} />
                </div>
                <div className={style['home__box']}>
                    <div className={style['home__content']}>
                        <div className={style['home__content-title']}>
                            Барселона — обзор города
                        </div>
                        <div className={style['home__content-text']}>
                            Барселона с её золотистыми пляжами,<br />
                            архитектурными шедеврами Гауди,<br />
                            многочисленными фестивалями и<br />
                            гастрономическим разнообразием понравилась<br />
                            мне в первый же день пребывания и стала<br /> местом,
                            в котором...
                        </div>
                        <div className={style['home__content-button']}>
                            Читать дальше
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Preview