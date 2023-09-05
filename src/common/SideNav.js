import React from "react";
import { Link } from "react-router-dom";
import {observer} from "mobx-react";
import Backdrop from './Backdrop/Backdrop';
import style from './SideNav.module.scss';

import arrowLeftDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import fileGray from '../assets/img/icons-new-design/file--gray.svg';
import newspaperGray from '../assets/img/icons-new-design/newspaper--gray.svg';
import schoolOutlineGray from '../assets/img/icons-new-design/school-outline--gray.svg';
import commercialBuildingsGray from '../assets/img/icons-new-design/commercial-buildings--gray.svg';
import stairsGray from '../assets/img/icons-new-design/stairs--gray.svg';
import {ThemeContext} from "../themeContext";

class SideNav extends React.Component {

  render() {
    const themeContext = this.context;

    const menuLinks = [
      // {
      //   text: 'Post a Job',
      //   link: '/add-job',
      //   icon: fileGray
      // },
      // {
      //   text: 'Our Blog',
      //   link: '/blog',
      //   icon: newspaperGray
      // },
      // {
      //   text: 'Edu Room',
      //   link: '/edu-room',
      //   icon: schoolOutlineGray
      // },
      // {
      //   text: 'Brand Room',
      //   link: '/brand-room',
      //   icon: commercialBuildingsGray
      // },
      // {
      //   text: 'J4IT token',
      //   link: '/token',
      //   icon: commercialBuildingsGray
      // },
      {
        text: 'Statistics',
        link: '/statistics',
        icon: stairsGray
      },
    ];

    const secondMenuLinks = [
      {
        text: 'About Us',
        link: '/about'
      },
      {
        text: 'Imprint',
        link: '/imprint'
      },
      {
        text: 'Terms & Conditions',
        link: '/terms-and-conditions'
      },
      {
        text: 'Privacy Policy',
        link: '/privacy-policy'
      },
    ];

    const menuLinksOutput = menuLinks.map((link, index) => {
      return (
        <li className={style.SideNav_menuItem} key={index}>
          <Link to={link.link}>
            <img
            src={link.icon}
            className={style.SideNav_menuItem_icon}
            />
            <span>{link.text}</span>
          </Link>
        </li>
      )
    });

    const secondMenuLinksOutput = secondMenuLinks.map((link, index) => {
      return (
        <li className={style.SideNav_secondMenuItem} key={index}>
          <Link to={link.link}>
            {link.text}
          </Link>
        </li>
      )
    });

    const sideNavClasses = [style.SideNav];

    if(this.props.open) {
      sideNavClasses.push(style.SideNav__open);
    }

    if(themeContext.theme === 'dark') {
      sideNavClasses.push(style.SideNav_dark);
    } else {
      sideNavClasses.push(style.SideNav_light);
    }

    return(
      <>
        <Backdrop onClick={this.props.onCloseClick} show={this.props.open} />
        <aside className={sideNavClasses.join(' ')}>
          <div className={style.SideNav_top}>
            <button
            className={style.SideNav_arrowBtn}
            onClick={this.props.onCloseClick}
            >
              <img
              src={arrowLeftDarkGray}
              />
            </button>
            <button
            className={style.SideNav_closeBtn}
            onClick={this.props.onCloseClick}
            >
            </button>
          </div>
          <ul className={style.SideNav_menu}>
            {menuLinksOutput}
          </ul>
          <ul className={style.SideNav_secondMenu}>
            {secondMenuLinksOutput}
          </ul>
        </aside>
      </>
    )
  }
}

SideNav.contextType = ThemeContext;

SideNav = observer(SideNav);
export default SideNav;
