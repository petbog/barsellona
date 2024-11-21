import { FC } from "react";
import style from "./style.module.scss";

interface ButtonProps {
    className?: string;
    children?: string;
    onClick?: () => void; 
}

const Button:FC<ButtonProps> = ({  children,  onClick }) => {

    return (
        <div className={style["Button"]}>
            <button  className={style["Button-item"]} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;