import React, {Component} from "react";
import {Col, Row} from "antd";
import {
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem, MDBNavLink
} from "mdbreact";
import logoDE from 'assets/img/wiewior.png';
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const styles = theme => ({
  topNav: {
    height: '9vh'
  },
  logoImg: {
    height: '4.2vh',
    marginTop: '2.65vh',
    marginLeft: '2vh'
  },
});

class MobileTopNav extends Component {
  state = {
    collapse: false,
  };

  constructor() {
    super();
    this.toggleMenu= this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    const { classes } = this.props;
    const logo = logoDE;
    return (
      <Row>
        <Col span={24}>
        <MDBNavbar
          style={{padding: 0}}
          color="#f3f6f8 lighten-4"
          light
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <Link to={'/'}>
                <div className={classes.topNav}>
                  <img src={logo} className={classes.logoImg} alt="JobsForIT"/>
                </div>
              </Link>
            </MDBNavbarBrand>
            <MDBHamburgerToggler
              color="#7f7f7f"
              id="hamburger1"
              onClick={this.toggleMenu}
            />
            <MDBCollapse
              isOpen={this.state.collapse}
              style={{
                padding: 0,
                zIndex: 5,
                marginLeft: "-15px",
                marginRight: "-15px",
                height: "100vh",
                background: "#f3f6f8"
              }}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink style={{paddingLeft: "7vw"}} to="/">Home</MDBNavLink>
                </MDBNavItem>
                {/*<MDBNavItem>*/}
                {/*  <MDBNavLink style={{paddingLeft: "7vw"}} to="/about">About</MDBNavLink>*/}
                {/*</MDBNavItem>*/}
                <MDBNavItem>
                  <MDBNavLink style={{paddingLeft: "7vw"}} to="/imprint">Imprint</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{paddingLeft: "7vw"}} to="/terms-and-conditions">Terms & Conditions</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{paddingLeft: "7vw"}} to="/privacy-policy">Privacy Policy</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </Col>
      </Row>
    )
  }
}

export default withStyles(styles)(MobileTopNav);
