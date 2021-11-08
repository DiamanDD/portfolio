import React from "react";
import style from "./Skills.module.css"
import commonStyle from "../common/common.module.css";
import {Presentation} from "./Presentation";
import {TitleBlock} from "../common/Compopnents/TitleBlockComponent/TitleBlock";
const react="Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,"
const logoReact ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
export const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={`${commonStyle.container} ${style.skillsontainer}`}>

                <TitleBlock title={"My Skills"}/>
                <div className={style.presentation}>
                    <Presentation  title={"Reactfffff"} description={react} urlIcon={logoReact}/>
                    <Presentation  title={"React"} description={react} urlIcon={logoReact}/>
                    <Presentation  title={"React"} description={react} urlIcon={logoReact}/>





                </div>
            </div>
        </div>

    )

}