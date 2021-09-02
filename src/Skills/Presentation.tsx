import React from "react";
import style from "./Presentation.module.css"

type PresentationType={
    title:string
    description:string
    urlIcon:string
}

export const Presentation=(props:PresentationType)=>{
    return(
        <div className={style.body}>

            <div className={style.logo}><img alt={"logo"} src={`${props.urlIcon}`}/></div>
            <div className={style.title}>{props.title}</div>
            <div className={style.descriptios} >{props.description}</div>
        </div>
    )
}