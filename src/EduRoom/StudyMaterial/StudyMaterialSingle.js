import React from "react";

import TopNav from "../../common/TopNav/TopNav";
import Heading from "../../common/Heading";
import Container from "../../common/Container/Container";
import studyMaterialBanner from '../../assets/img/study-material-banner.png';
import arrowWhite from '../../assets/img/icons-new-design/arrow--left--white.svg';
import arrowBottomViolet from '../../assets/img/icons-new-design/arrow--bottom--violet.svg';

import style from './StudyMaterialSingle.module.scss';

class StudyMaterialSingle extends React.Component {

  state = {
    accordionItems: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis.',
        isActive: false
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis.',
        isActive: false
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis.',
        isActive: false
      }
    ]
  }

  toggleAccordionItem(index) {
    const accordionItems = [...this.state.accordionItems];
    accordionItems[index].isActive = !accordionItems[index].isActive;
    this.setState({accordionItems: accordionItems});
  }

  render() {
    return(
      <>
        <TopNav />
        <div className={style.StudyMaterialSingle_banner}>
          <img
          src={studyMaterialBanner}
          className={style.StudyMaterialSingle_banner_img}
          />
          <div className={style.StudyMaterialSingle_banner_btns}>
            <button
              className={style.StudyMaterialSingle_banner_btn}
              >
              <img
              src={arrowWhite}
              />
            </button>
          </div>
        </div>
        <Container>
          <div className={style.StudyMaterialSingle_top}>
            <Heading 
            variant='h1'
            className={style.StudyMaterialSingle_heading}
            >
              Python Interview Questions
            </Heading>
            <p className={style.StudyMaterialSingle_detail}>
              80 Questions
            </p>
          </div>
          <p className={style.StudyMaterialSingle_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. 
          </p>
          <ul className={style.StudyMaterialSingle_list}>
          {this.state.accordionItems.map((element, index) => (
            <li className={element.isActive ? [style.StudyMaterialSingle_item, style.StudyMaterialSingle_item__active].join(' ') : style.StudyMaterialSingle_item} key={index}>
              <div className={style.StudyMaterialSingle_item_top} onClick={() => this.toggleAccordionItem(index)}>
                <h3 className={style.StudyMaterialSingle_item_heading}>
                  {element.title}
                </h3>
                <img
                src={arrowBottomViolet}
                className={style.StudyMaterialSingle_item_icon}
                />
              </div>
              <div className={style.StudyMaterialSingle_item_bottom}>
                <p className={style.StudyMaterialSingle_item_description}>
                  {element.description}
                </p>
              </div>
            </li>
          ))}
          </ul>
        </Container>
      </>
    );
  }
}

export default StudyMaterialSingle;