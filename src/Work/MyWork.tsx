import React from "react";
import style from "./MyWork.module.css"
type MyWork ={
    description:string
}

export const MyWork = (props:MyWork) => {
    return (
       <div className={style.myWork}>

           <div className={style.zakrivashka}>

           </div>


           <div className={style.preview}>Картника</div>
           <div className={style.container}>
               <span className={style.title}>название</span>

               <span className={style.description}> {props.description}</span>
           </div>
       </div>

    )

}