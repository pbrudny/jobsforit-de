import React from 'react';
import SwiperCore, {Navigation} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

import {ReactComponent as AngularIcon} from 'assets/img/icons-new-design/technology-icons/angular.svg';
import {ReactComponent as BlockChainIcon} from 'assets/img/icons-new-design/technology-icons/blockchain.svg';
import {ReactComponent as CLangIcon} from 'assets/img/icons-new-design/technology-icons/c.svg';
import {ReactComponent as CloudIcon} from 'assets/img/icons-new-design/technology-icons/cloud.svg';
import {ReactComponent as DataIcon} from 'assets/img/icons-new-design/technology-icons/data.svg';
import {ReactComponent as DevOpsIcon} from 'assets/img/icons-new-design/technology-icons/devops.svg';
import {ReactComponent as DotNetIcon} from 'assets/img/icons-new-design/technology-icons/dotnet.svg';
import {ReactComponent as GameDevIcon} from 'assets/img/icons-new-design/technology-icons/gamedev.svg';
import {ReactComponent as GoLangIcon} from 'assets/img/icons-new-design/technology-icons/golang.svg';
import {ReactComponent as HTMLIcon} from 'assets/img/icons-new-design/technology-icons/html.svg';
import {ReactComponent as JavaIcon} from 'assets/img/icons-new-design/technology-icons/java.svg';
import {ReactComponent as JavaScriptIcon} from 'assets/img/icons-new-design/technology-icons/javascript.svg';
import {ReactComponent as MobileIcon} from 'assets/img/icons-new-design/technology-icons/mobile.svg';
import {ReactComponent as NodeIcon} from 'assets/img/icons-new-design/technology-icons/node.svg';
import {ReactComponent as OtherIcon} from 'assets/img/icons-new-design/technology-icons/other.svg';
import {ReactComponent as PHPIcon} from 'assets/img/icons-new-design/technology-icons/php.svg';
import {ReactComponent as ProjectManagementIcon} from 'assets/img/icons-new-design/technology-icons/project-management.svg';
import {ReactComponent as PythonIcon} from 'assets/img/icons-new-design/technology-icons/python.svg';
import {ReactComponent as ReactIcon} from 'assets/img/icons-new-design/technology-icons/react.svg';
import {ReactComponent as RubyIcon} from 'assets/img/icons-new-design/technology-icons/ruby.svg';
import {ReactComponent as ScalaIcon} from 'assets/img/icons-new-design/technology-icons/scala.svg';
import {ReactComponent as TestingIcon} from 'assets/img/icons-new-design/technology-icons/testing.svg';
import {ReactComponent as UXIcon} from 'assets/img/icons-new-design/technology-icons/ux.svg';
import {ReactComponent as VueIcon} from 'assets/img/icons-new-design/technology-icons/vue.svg';


import style from './style.module.scss';
import {ThemeContext} from "../../themeContext";

class TechnologySlider extends React.Component {

    prevButton = React.createRef();
    nextButton = React.createRef();

    technologyIcons = {
        'JS': <JavaScriptIcon />,
        'Angular': <AngularIcon />,
        'Vue': <VueIcon />,
        'React': <ReactIcon />,
        'Node': <NodeIcon />,
        'HTML': <HTMLIcon />,
        'PHP': <PHPIcon />,
        'Java': <JavaIcon />,
        'Ruby': <RubyIcon />,
        'Python': <PythonIcon />,
        'C': <CLangIcon />,
        '.Net': <DotNetIcon />,
        'Scala': <ScalaIcon />,
        'GO': <GoLangIcon />,
        'Mobile': <MobileIcon />,
        'Testing': <TestingIcon />,
        'UX': <UXIcon />,
        'DevOps': <DevOpsIcon />,
        'Cloud': <CloudIcon />,
        'Data': <DataIcon />,
        'Game': <GameDevIcon />,
        'PM/BA': <ProjectManagementIcon />,
        'B-chain': <BlockChainIcon />,
        'Other': <OtherIcon />
    };

    render() {

        const themeContext = this.context;

        SwiperCore.use([Navigation])

        const technologies = this.props.technologies;

        const classes = [style.TechnologySlider];

        if(themeContext.theme === 'dark') {
            classes.push(style.TechnologySlider_dark);
        } else {
            classes.push(style.TechnologySlider_light)
        }

        if(this.props.fullwidth) {
            classes.push(style.TechnologySlider_fullwidth)
        }

        return (
            <div className={classes.join(' ')}>
                <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    preventClicks
                    allowTouchMove={false}
                    navigation={{
                        prevEl: this.prevButton.current,
                        nextEl: this.nextButton.current
                    }}
                >
                    {technologies.map(technology => (
                        <SwiperSlide
                            className={style.TechnologySlider__slide}
                            key={technology.name}
                        >
                            <button
                                className={style.TechnologySlider__slideButton}
                                onClick={this.props.onClick}
                                value={technology.name}
                            >
                                <div className={style.TechnologySlider__slideIconWrapper}
                                     style={technology.buttonPressed ? {background: technology.background} : {}}>
                                    <span className={[style.TechnologySlider__slideIcon].join(' ')}
                                          style={technology.buttonPressed ? {color: 'white'} : {color: 'lightgray'}}>
                                        {this.technologyIcons[technology.name]}
                                    </span>
                                </div>
                                <span
                                    className={technology.buttonPressed ? [style.TechnologySlider__slideName, style.TechnologySlider__slideName_active].join(' ') : style.TechnologySlider__slideName}>
                                {technology.name}
                            </span>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className={[style.TechnologySlider__button, style.TechnologySlider__button_prev].join(' ')}
                    ref={this.prevButton}
                />
                <button
                    className={[style.TechnologySlider__button, style.TechnologySlider__button_next].join(' ')}
                    ref={this.nextButton}
                />
            </div>
        )
    }
}

TechnologySlider.contextType = ThemeContext;

export default TechnologySlider;