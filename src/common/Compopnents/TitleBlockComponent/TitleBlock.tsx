import style from "./TitleBlock.module.css";
import React from "react";

type TitleBlock = {
    title: string
}
export const TitleBlock = (props: TitleBlock) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>

        </div>
    )
}