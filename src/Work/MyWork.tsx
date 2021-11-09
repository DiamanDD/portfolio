import React from "react";
import style from "./MyWork.module.scss"

type MyWork = {
    style:imgstyletype
    name:string
    description: string
    date:string
}
type imgstyletype={
    backgroundImage:string
}

export const MyWork = (props: MyWork) => {
    return (
        <div className={style.myWork}>
            <div className={style.preview} style={props.style}>
                <a href="#" className={style.btn}>Посмотреть</a>
            </div>
            <div className={style.container}>
                <span className={style.date}>{props.date} </span>
                <h3 className={style.title}>{props.name}</h3>

                <span className={style.description}> {props.description}</span>
                <a href="#" className={style.read}>READ MORE</a>
            </div>
        </div>

    )

}