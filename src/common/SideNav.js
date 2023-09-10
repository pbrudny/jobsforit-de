import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Backdrop from './Backdrop/Backdrop';
import style from './SideNav.module.scss';
import arrowLeftDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import stairsGray from '../assets/img/icons-new-design/stairs--gray.svg';
import fileGray from '../assets/img/icons-new-design/file--gray.svg';
import newspaperGray from '../assets/img/icons-new-design/newspaper--gray.svg';
import schoolOutlineGray from '../assets/img/icons-new-design/school-outline--gray.svg';
import commercialBuildingsGray from '../assets/img/icons-new-design/commercial-buildings--gray.svg';
import { ThemeContext } from "../themeContext";

const SideNav = observer(({ open, onCloseClick }) => {
  const themeContext = useContext(ThemeContext);

  const menuLinks = [
    {
      text: 'Post a Job',
      link: '/add-job',
      icon: fileGray
    },
    {
      text: 'Our Blog',
      link: '/blog',
      icon: newspaperGray
    },
    {
      text: 'Edu Room',
      link: '/edu-room',
      icon: schoolOutlineGray
    },
    {
      text: 'J4IT token',
      link: '/token',
      icon: commercialBuildingsGray
    },
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

  const sideNavClasses = [
    style.SideNav,
    open && style.SideNav__open,
    themeContext.theme === 'dark' ? style.SideNav_dark : style.SideNav_light
  ].filter(Boolean).join(' ');

  return (
    <>
      <Backdrop onClick={onCloseClick} show={open} />
      <aside className={sideNavClasses}>
        <div className={style.SideNav_top}>
          <button className={style.SideNav_arrowBtn} onClick={onCloseClick}>
            <img src={arrowLeftDarkGray} alt="Close arrow" />
          </button>
          <button className={style.SideNav_closeBtn} onClick={onCloseClick}></button>
        </div>
        <ul className={style.SideNav_menu}>
          {menuLinks.map((link, index) => (
            <li className={style.SideNav_menuItem} key={index}>
              <Link to={link.link}>
                <img src={link.icon} className={style.SideNav_menuItem_icon} alt={link.text} />
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={style.SideNav_secondMenu}>
          {secondMenuLinks.map((link, index) => (
            <li className={style.SideNav_secondMenuItem} key={index}>
              <Link to={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
});

export default SideNav;
