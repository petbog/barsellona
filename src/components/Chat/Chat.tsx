import style from './style.module.scss';
import avatar from '../../assets/icons/Oval 2@2x.png'
import flag from '../../assets/icons/Icon — flag.svg'
import rating from '../../assets/icons/Рейтинг.svg'
import send from '../../assets/icons/Icon — Send.svg'
import React, { FC, useState } from 'react';
import { useMessagesStore } from '../../stores/MessagesStore';
import useTime from '../../utils/hooks/useTime';
import Message from '../Messag/messag';
import admin from '../../assets/icons/bober1.webp'

interface ChatPropsType {
    userName: string,
    userLastname: string,
    UserRole: string
}

const Chat: FC<ChatPropsType> = ({ userName, userLastname, UserRole }) => {
    const { actions, selectors } = useMessagesStore();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

    };

    const dateMessage = useTime();

    const handleClick = () => {
        actions.addMessageActions(
            {
                lastname: 'Петрова',
                name: 'Вероника',
                messages: inputValue,
                role: UserRole,
                time: dateMessage
            }
        );
        setInputValue('');
    };
    const data = selectors.getAllMessagesSelector();

    return (
        <div className={style['chat']}>
            <div className={style['chat__header']}>
                <div className={style['chat__header-box']}>
                    {
                         UserRole === 'Администратор' ?   <img src={admin} alt="avatar" className={style['chat__header-img']} /> :  <img src={avatar} alt="avatar" className={style['chat__header-img']} />
                    }
                    <div className={style['chat__info']}>
                        <div className={style['chat__info-box']}>
                            <span className={style['chat__info-name']}>{userName}</span>
                            <span className={style['chat__info-lastname']}>{userLastname}</span>
                        </div>
                        <div className={style['chat__role']}>
                            <img src={flag} alt="flag" className={style['chat__role-img']} />
                            <span className={style['chat__role-item']}>{UserRole}</span>
                        </div>
                    </div>
                </div>
                {
                    UserRole === 'Администратор' ? '' : <div className={style['chat__reting']}>
                        <img src={rating} alt="rating" className={style['chat__reting-item']} />
                    </div>
                }

            </div>
            <div className={style['chat__lent']}>
                {
                    <div className={style['chat__lent']}>
                        {
                            data.map((item, index) => (
                                <Message key={index} message={item}  />
                            ))
                        }
                    </div>
                }
            </div>
            <div className={style['chat__bottom']}>
                {
                      UserRole === 'Администратор' ?
                       <img src={admin} alt="flag" className={style['chat__bottom-img-avatar']} /> :
                       <img src={avatar} alt="flag" className={style['chat__bottom-img-avatar']} />
                }
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
    )
}


export default Chat