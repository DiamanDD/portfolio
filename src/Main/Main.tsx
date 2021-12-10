import React from "react";
import style from "./Main.module.css"
import commonStyle from "../common/common.module.css";

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={`${commonStyle.container} ${style.mainContainer}`}>
                <div className={style.welkomeBlock}>

                        <h1>Hello I'm Dmitry</h1>
                        <h3>I am a FRONT-END developer</h3>
                </div>
                    <div className={style.photo}>ФОТО</div>

            </div>
        </div>

    )

}