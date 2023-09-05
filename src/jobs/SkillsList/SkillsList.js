import React from 'react';
import style from "./style.module.scss";
import acorn from "../../assets/img/icons-new-design/acorn.svg";

function SkillsList(props) {

    const getAcorns = (level) => {
        let output = [];

        for(let i = 0; i < level; i++) {
            output.push(
                <li className={style.SkillsList__icon} key={i}>
                    <img
                        src={acorn}
                    />
                </li>
            );
        }

        for(let i = level; i < 4; i++) {
            output.push(
                <li className={[style.SkillsList__icon, style.SkillsList__icon_grayscale].join(' ')} key={i}>
                    <img
                        src={acorn}
                    />
                </li>
            );
        }

        return output;
    }

    const classes = [style.SkillsList];

    if(props.theme === 'dark') {
        classes.push(style.SkillsList_dark);
    } else {
        classes.push(style.SkillsList_light);
    }

    return(
        <ul className={classes.join(' ')}>
            {props.skillsList.map(item => (
                <li className={style.SkillsList__item} key={item.name}>
                    <p className={style.SkillsList__heading}>{item.name}</p>
                    <ul className={style.SkillsList__icons}>
                        {getAcorns(item.level)}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default SkillsList;