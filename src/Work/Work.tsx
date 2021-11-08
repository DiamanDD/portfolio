import React from "react";
import style from "./Work.module.css"
import commonStyle from "../common/common.module.css";
import {MyWork} from "./MyWork";
import {TitleBlock} from "../common/Compopnents/TitleBlockComponent/TitleBlock";
import todolist from "./../assets/image/todolist.jpg"
const react = "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века."

const imgstyle={
    backgroundImage:`url(${todolist})`
}

export const Work = () => {
    return (
        <div className={style.work}>
            <div className={`${commonStyle.container} ${style.workContainer}`}>

                <TitleBlock title={"My work"}/>
                <div className={style.presentation}>
                    <MyWork description={react} name={"Social Network"} style={imgstyle}/>
                    <MyWork description={react} name={ "Todo List"} style={imgstyle}/>
                </div>
            </div>
        </div>

    )

}

