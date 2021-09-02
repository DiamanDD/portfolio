import React from "react";
import style from "./Header.module.css"
import {Nav} from "./Nav/Nav";
import commonStyle from "../common/common.module.css";

export const Header = () => {
    return (

        <div className={style.header}>
            <div className={`${commonStyle.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>

    )

}