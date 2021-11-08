import React from "react";
import style from "./Contact.module.css"
import  commonStyle from "../common/common.module.css"
import {TitleBlock} from "../common/Compopnents/TitleBlockComponent/TitleBlock";


export const Contact = () => {
    return (
<form>
        <div className={style.Contact}>
            <div className={`${commonStyle.container} ${style.contactContainer}`}>

               <TitleBlock title={"Contacts"}/>
                <div className={style.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea></textarea>
                </div>
                <button>Отправить</button>

            </div>
        </div>
</form>
    )

}