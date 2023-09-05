import React from "react";
import {NavLink} from "react-router-dom";
import {ReactComponent as LogoDE} from 'assets/img/logo.svg';
import {observer} from "mobx-react";
import style from './style.module.scss';
import Button from '../Button/Button';
import Hamburger from '../Hamburger/Hamburger';
import SideNav from '../SideNav';
import ThemeSwitcher from "../ThemeSwitcher";
import {ThemeContext} from "../../themeContext";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {isMobile, isTablet} from "react-device-detect";


const url = "https://jobsforit.us21.list-manage.com/subscribe/post?u=9bb02c9224c59d5a48a7cac52&id=9abe4768b0&f_id=00bbc1e1f0";

const CustomForm = ({status, message, onValidated}) => {
  let email;

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{color: "blue"}}>sending...</div>}
      {status === "error" && (
        <div
          style={{color: "red"}}
          dangerouslySetInnerHTML={{__html: message}}
        />
      )}
      {status === "success" && (
        <div
          style={{
            color: "green",
            fontSize: "1.5em",
            fontWeight: 400,
          }}
          dangerouslySetInnerHTML={{__html: message}}
        />
      )}
      {status !== "success" && (
        <div>
          <input
            style={{
              fontSize: "1.5em",
              padding: 5,
              cursor: 'text'
            }}
            ref={node => (email = node)}
            type="email"
            placeholder=" your email..."
          />
          <button
            style={{
              fontSize: "1.5em",
              userSelect: 'none',
              backgroundColor: '#ff5e26',
              color: '#fff',
              padding: 5,
              border: '0',
              cursor: 'pointer',
              fontWeight: 800,
              display: 'inline-block'
            }}
            onClick={submit}
          >
            Subscribe
          </button>
        </div>
      )
      }
    </div>
  );
};

// const SubscribeForm = () =>

class TopNav extends React.Component {

  state = {
    showSideNav: false
  }


  sideNavClosedHandler = () => {
    this.setState({showSideNav: false});
  }

  sideNavToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideNav: !prevState.showSideNav}
    });
  }

  render() {
    const themeContext = this.context;

    const classes = [style.topNav];

    if (themeContext.theme === 'dark') {
      classes.push(style.topNav_dark);
    } else {
      classes.push(style.topNav_light);
    }

    return (
      <>
        <div className={classes.join(' ')}>
          <div className={style.topNav_wrapper}>
            <div className={style.topNav_group}>
              <a href='/' className={style.topNav_logo}>
                <LogoDE/>
              </a>
            </div>

            { !isMobile && <div className={style.topNav_group}>
              <p style={{
                marginRight: '1em',
                fontSize: "1.5em",
                fontWeight: 400,
                verticalAlign: 'middle',
                display: 'inline-block',
              }}>Get latest jobs</p>
              <MailchimpSubscribe
                url={url}
                render={({subscribe, status, message}) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
            </div>}
            <div className={style.topNav_group}>
              <ThemeSwitcher/>
              <ul className={style.topNav_menu}>
                {/*<li className={style.topNav_menu_item}>*/}
                {/*  <NavLink exact activeClassName={style.topNav_menu_item_activeLink} to={'/'}>Jobs</NavLink>*/}
                {/*</li>*/}
                {/*<li className={style.topNav_menu_item}>*/}
                {/*<NavLink exact activeClassName={style.topNav_menu_item_activeLink} to={'/tutorials'}>DevTube</NavLink>*/}
                {/*</li>*/}
                <li className={style.topNav_menu_item}>
                  <NavLink exact activeClassName={style.topNav_menu_item_activeLink}
                           to={'/pricing'}>Pricing</NavLink>
                </li>
                <li className={style.topNav_menu_item}>
                  <NavLink exact activeClassName={style.topNav_menu_item_activeLink}
                           to={'/statistics'}>Statistics</NavLink>
                </li>
                {/*<li className={style.topNav_menu_item}>*/}
                {/*  <NavLink exact activeClassName={style.topNav_menu_item_activeLink} to={'/token'}>Token</NavLink>*/}
                {/*</li>*/}
                <li className={style.topNav_menu_item}>
                  {/*<NavLink exact activeClassName={style.topNav_menu_item_activeLink} to={'/brand-room'}>Brand Room</NavLink>*/}
                </li>
                <li className={style.topNav_menu_item}>
                  <Button href={'/pricing'} classes={[style.topNav_button]}>Post a Job</Button>
                </li>
              </ul>
              <Hamburger
                onClick={this.sideNavToggleHandler}
              />
            </div>
          </div>
        </div>
        <SideNav
          open={this.state.showSideNav}
          onCloseClick={this.sideNavClosedHandler}
        />
      </>
    )
  }
}

TopNav.contextType = ThemeContext;

TopNav = observer(TopNav);
export default TopNav;
