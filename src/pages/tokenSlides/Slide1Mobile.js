import React from 'react';
import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  heading2: {
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontWeight": "600",
    "textAlign": "center",
    "marginTop": "2vh",
    "fontSize": "2.5vh"
  },
  underscore: {
    "width": "2.5vw",
    "marginLeft": "1.5vw",
    "paddingLeft": "0px",
    "paddingTop": "1.7vh"
  },
  heading3: {
    "position": "static",
    "marginTop": "2vw",
    "marginBottom": "3%",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontWeight": "400",
    "textAlign": "center"
  },
  iconWrapper: {
    width: '30%',
    margin: '0 35%',
    height: '20vh'
  },
  image4: {
    "width": "15px",
    "marginLeft": ".5rem",
  },
  developers: {
    "color": "#ef5d68"
  },
  heart: {
    "color": "#ef5d68"
  },
  whyTextWrapper: {
    "display": "block",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "padding": ".5vw",
    'fontSize': "1.5vh",
    "backgroundColor": "#35dda2",
    "color": "#333"
  },
  description: {
    "position": "static",
    "width": "100%",
    "maxHeight": "none",
    "minHeight": "auto",
    "marginTop": "2vw",
    "marginBottom": "0px",
    "padding": ".5vw .5vw .5vw 1.5vw",
    'fontSize': "1.5vh",
    "borderStyle": "none",
    "borderWidth": "0px",
    "borderColor": "#ef5d68",
    "backgroundColor": "rgba(0, 0, 0, 0.25)",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "lineHeight": "1.5",
    "fontWeight": "400"
  },
  whyImageWrapper: {
    "marginTop": "0px",
    "marginLeft": "0px",
    "paddingLeft": "0px",
    "textAlign": "left"
  },
  whyImage: {
    "position": "static",
    "display": "block",
    "width": "100%",
    "height": "18vw",
    "paddingRight": "0px",
    "paddingLeft": "0px",
    "alignSelf": "auto",
    "order": "0",
    "border": "1px none #000",
    "backgroundImage": "url(https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf4544c2ce782ae65ce81e_frustrated.gif)",
    "backgroundPosition": "0% 0%",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "backgroundAttachment": "scroll"
  },
  monkeyImage: {
    "width": "100%",
    "height": "28vh",
    "alignItems": "center",
    "backgroundImage": "url(https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf44da5ad64f3c268854a4_Help.gif)",
    "backgroundPosition": "50% 0%",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "marginTop": "2vh",
    "marginBottom": "2vh",
  },
  whatTextWrapper: {
    "width": "100%",
    "padding": ".5vw",
    "backgroundColor": "#fd6c7d",
  },
  paragraphRight: {
    "display": "block",
    "width": "100%",
    "marginTop": "0px",
    "marginBottom": "0px",
    "padding": "1vh",
    "backgroundColor": "rgba(0, 0, 0, 0.25)",
    "fontFamily": "Roboto, sans-serif",
    "font-weight": "500",
    "color": "#fff",
    "lineHeight": "1.5",
    "textAlign": "left",
    "letterSpacing": "0px"
  },
  highlight: {
    "paddingRight": "0.3vw",
    "paddingLeft": "0.3vw",
    "borderStyle": "solid",
    "borderWidth": "0.1vh",
    "borderColor": "#08afc3",
    "borderRadius": ".5vw",
    "backgroundColor": "azure",
    "opacity": "1",
    "color": "#08afc3",
    "fontWeight": "700"
  },
  link: {
    textDecoration: 'underline',
    color: '#0056b3',
  },
});

function Slide1Mobile(props) {
  const {classes} = props;
  return (
    <div>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={{xs: 12}}
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Grid item xs={12}>
          <h2 className={classes.heading2}>Hello World
            <img
              src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf62039bf13e539b52d2d5_migmig.gif"
              className={classes.underscore}
              alt={'hello'}
            />
          </h2>
        </Grid>
        <Grid item xs={12}>
          <h2 className={classes.heading3}>
            We have just launched <span className={classes.developers}>$J4IT</span> crypto token
            <img
              src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dc7404511520e5be1e70431_321805.svg"
              className={classes.image4}
              alt={"rocket"}
            />
          </h2>
        </Grid>

        <div style={{marginTop: '2vh'}}>
          <Grid item xs={12} >
            <div className={classes.whyTextWrapper}>
              <div className={classes.textWrapper}>
                <h3 className={classes.paragraphRight}>🤔 Why you should own $J4IT?</h3>
                <p className={classes.description}>
                  Honestly. We have <span className={classes.highlight}>no idea</span>.
                  <br/>
                  <br/>
                  There is a <span className={classes.highlight}>little chance</span> it would have a big value in a
                  future
                  <br/>
                  We have <span className={classes.highlight}>no whitepaper</span> yet
                  <br/>
                  We don't use any groundbreaking technology
                  <br/>
                  We have <span className={classes.highlight}>no roadmap</span> yet
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} >
            <div className={classes.monkeyImageWrapper}>
              <div className={classes.monkeyImage}>

              </div>
            </div>
          </Grid>
        </div>

        <Grid item xs={12} >
          <div className={classes.whatTextWrapper}>
            <h3 className={classes.paragraphRight}>🧐 What do we have?</h3>
            <p className={classes.description}>
              We have some <span className={classes.highlight}> spontaneous</span> ideas <br/>
              We have a <span className={classes.highlight}>nice</span> blockchain developer <br/>
              We have BEP20 J4IT token on <span className={classes.highlight}>BSC</span> (it's
              <a className={classes.link} href={"https://bscscan.com/token/0xc465f6bf7fb43676f9d343948e06501247080866"} target={'_blank'}> here</a>
              )<br/>
              We have guts to try <span className={classes.highlight}>crazy</span> stuff <br/>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Slide1Mobile);
