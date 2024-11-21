import Chat from "../../components/Chat/Chat"
import Preview from "../../components/Preview/Preview"
import ReviewsSlider from "../../components/ReviewsSlider/ReviewsSlider"
import style from './style.module.scss'






const Home = () => {
    return (
        <>
            <Preview />
            <ReviewsSlider />
            <div className={style['chat']}>
                <Chat UserRole="Администратор" userLastname="Бобров" userName="Борб" />
                <Chat UserRole="Гид по баварии,фотограф" userLastname="Петров" userName="Богдан"  />
            </div>


        </>
    )
}

export default Home