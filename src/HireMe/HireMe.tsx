import React from "react";
import style from "./HireMe.module.css"
import  commonStyle from "../common/common.module.css"


export const HireMe = () => {
    return (

        <div className={style.HireMe}>
            <div className={`${commonStyle.container} ${style.hireMeContainer}`}>
                    <span>Рассматриваю варианты удаленной работы </span>
                <button>НАнять меня</button>
            </div>
        </div>

    )

}