import React from "react";
import style from "./Footer.module.css"
import  commonStyle from "../common/common.module.css"


export const Footer = () => {
    return (

        <div className={style.footer}>
            <div className={`${commonStyle.container} ${style.footerContainer}`}>
                <span>Дмитрий Дубровский</span>
                <div className={style.social}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <span>&copy; 2021 Все права защищенны</span>
            </div>
        </div>

    )

}