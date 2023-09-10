import React, { useState, useCallback } from "react";
import {
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import logoDE from 'assets/img/wiewior.png';
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

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

const MobileTopNav = ({ classes }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleMenu = useCallback(() => {
    setCollapse(prevCollapse => !prevCollapse);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <MDBNavbar style={{padding: 0}} color="#f3f6f8 lighten-4" light>
          <MDBContainer>
            <MDBNavbarBrand>
              <Link to={'/'}>
                <div className={classes.topNav}>
                  <img src={logoDE} className={classes.logoImg} alt="JobsForIT"/>
                </div>
              </Link>
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#7f7f7f" id="hamburger1" onClick={toggleMenu} />
            <MDBCollapse
              isOpen={collapse}
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
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MobileTopNav);
