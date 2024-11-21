import style from './style.module.scss';
import avatar from '../../assets/icons/Oval 2@2x.png'
import flag from '../../assets/icons/Icon — flag.svg'
import rating from '../../assets/icons/Рейтинг.svg'
import send from '../../assets/icons/Icon — Send.svg'
import React, { useState } from 'react';
import { useMessagesStore } from '../../stores/MessagesStore';



const Chat = () => {
    const { actions, selectors } = useMessagesStore();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

    };

    const handleClick = () => {
        const currentTime = new Date().toISOString()
        actions.addMessageActions(
            {
                lastname: 'Петрова',
                name: 'Вероника',
                messages: inputValue,
                role: 'user',
                time: currentTime
            }
        );
        setInputValue('');
    };
    const data = selectors.getAllMessagesSelector();

    return (
        <div className={style['container']}>
            <div className={style['chat']}>
                <div className={style['chat__header']}>
                    <div className={style['chat__header-box']}>
                        <img src={avatar} alt="avatar" className={style['chat__header-img']} />
                        <div className={style['chat__info']}>
                            <div className={style['chat__info-box']}>
                                <span className={style['chat__info-name']}>Вероника</span>
                                <span className={style['chat__info-lastname']}>Петрова</span>
                            </div>
                            <div className={style['chat__role']}>
                                <img src={flag} alt="flag" className={style['chat__role-img']} />
                                <span className={style['chat__role-item']}>Администратор</span>
                            </div>
                        </div>
                    </div>
                    <div className={style['chat__reting']}>
                        <img src={rating} alt="rating" className={style['chat__reting-item']} />
                    </div>
                </div>



                <div className={style['chat__lent']}>
                    {
                        <div className={style['chat__lent']}>
                            {
                                data.map((item, index) => (
                                    <Message key={index} message={item} />
                                ))
                            }
                        </div>
                    }

                </div>




                <div className={style['chat__bottom']}>
                    <img src={avatar} alt="flag" className={style['chat__bottom-img-avatar']} />
                    <div className={style['chat__bottom-input']}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder={'Напишите сообщение...'}
                            className={style['chat__bottom-input-item']}
                        />
                    </div>
                    <div onClick={handleClick} className="">
                        <img src={send} alt="flag" className={style['chat__bottom-img-send']} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Message = React.memo(({ message }) => (
    <div className={style['chat__message']}>
        <img src={avatar} alt="avatar" className={style['chat__message-avatar']} />
        <div className={style['chat__message-box']}>
            <div className={style['chat__message-text']}>{message.messages}</div>
            <div className={style['chat__message-time']}>{message.time}</div>
        </div>
    </div>
));
export default Chat