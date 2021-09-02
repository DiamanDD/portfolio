import React from "react";
import style from "./Main.module.css"
import commonStyle from "../common/common.module.css";

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={`${commonStyle.container} ${style.mainContainer}`}>
                <div className={style.welkomeBlock}>
                        <span>Привет</span>
                        <h1>Меня зовут Дмитрий Дубровский</h1>
                        <span>Я FRONT-END разработчик</span>
                </div>
                    <div className={style.photo}>ФОТО</div>

            </div>
        </div>

    )

}