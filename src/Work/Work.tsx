import React from "react";
import style from "./Work.module.css"
import commonStyle from "../common/common.module.css";
import {MyWork} from "./MyWork";

const react="Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов"
export const Work = () => {
    return (
        <div className={style.work}>
            <div className={`${commonStyle.container} ${style.workContainer}`}>

                    <div className={style.title}>Мои работы</div>
                    <div className={style.presentation}>
                        <MyWork description={react}/>
                        <MyWork description={react}/>
                    </div>
            </div>
        </div>

    )

}