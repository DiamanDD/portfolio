import React from "react";
import style from "./Contact.module.css"
import  commonStyle from "../common/common.module.css"


export const Contact = () => {
    return (
<form>
        <div className={style.Contact}>
            <div className={`${commonStyle.container} ${style.contactContainer}`}>

                <span>Контакты</span>
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