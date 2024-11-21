import { FC } from "react";
import { messagesType } from "../../stores/MessagesStore";
import avatar from '../../assets/icons/Oval 2@2x.png'
import admin from '../../assets/icons/bober1.webp'
import style from './style.module.scss'

interface MessageProps {
    message: messagesType;
}

const Message: FC<MessageProps> = ({ message }) => {
    const isAdmin = message.role === 'Администратор';

    return (
        <>
            {
                isAdmin ? (<div className={style['admin__message']}>
                    <img src={admin} alt="avatar" className={style['admin__message-avatar']} />
                    <div className={style['admin__message-box']}>
                        <div className={style['admin__message-text']}>{message.messages}</div>
                        <div className={style['admin__message-time']}>{message.time}</div>
                    </div>
                </div>

                ) : (<div className={style['chat__message']}>
                    <img src={avatar} alt="avatar" className={style['chat__message-avatar']} />
                    <div className={style['chat__message-box']}>
                        <div className={style['chat__message-text']}>{message.messages}</div>
                        <div className={style['chat__message-time']}>{message.time}</div>
                    </div>
                </div>)
            }
        </>
    );
};

export default Message;