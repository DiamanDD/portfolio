import React from "react";
import style from "./Contact.module.scss"
import commonStyle from "../common/common.module.css"
import {TitleBlock} from "../common/Compopnents/TitleBlockComponent/TitleBlock";


export const Contact = () => {
    return (
        <form>
            <div className={style.Contact}>
                <div className={`${commonStyle.container} ${style.contactContainer}`}>

                    <TitleBlock title={"Contacts"}/>
                    <div className={style.contactFormContainer}>
                        <div className={style.contacts}>
                            <h2>
                                Contact information
                            </h2>
                            <div className={style.contactInfo}>Krasnodar city</div>
                            <div className={style.contactInfo}>Dimond@list.ru</div>
                            <div className={style.contactInfo}>+7-XXX-XXX-6960</div>
                        </div>
                        <div className={style.cotactForm}>
                            <div className={style.form}>
                                <input type={"text"}/>
                                <input type={"text"}/>
                                <textarea></textarea>
                            </div>
                            <button>Отправить</button>
                        </div>
                    </div>


                </div>
            </div>
        </form>
    )

}