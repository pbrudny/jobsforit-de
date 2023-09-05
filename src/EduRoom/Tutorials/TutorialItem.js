import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../../common/Heading';
import tutorialImg from '../../assets/img/temp-tutorialItem-img.png';

import style from './TutorialItem.module.scss';

class TutorialItem extends React.Component {
    render() {
        return(
            <Link to='/' className={style.TutorialItem}>
                <div className={style.TutorialItem_top}>
                    <div className={style.TutorialItem_imgWrapper}>
                        <img 
                        src={tutorialImg}
                        className={style.TutorialItem_img}
                        />
                    </div>
                    <div className={style.TutorialItem_group}>
                        <Heading 
                        variant='h3'
                        className={style.TutorialItem_heading}
                        >
                            Tutorial title will come here
                        </Heading>
                        <span className={style.TutorialItem_detail}>
                            Tutor name
                        </span>
                        <span className={style.TutorialItem_detail}>
                            Jun 2 . 20min
                        </span>
                    </div>
                </div>
                <p className={style.TutorialItem_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra...
                </p>
            </Link>
        );
    }
}

export default TutorialItem;