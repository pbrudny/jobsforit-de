import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Link} from "react-router-dom";

const styles = theme => ({
  container1: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "absolute",
    "left": "0%",
    "top": "0%",
    "right": "0%",
    "bottom": "auto",
    "maxWidth": "100%",
    "minHeight": "100%",
    "marginRight": "auto",
    "marginLeft": "auto",
    "padding": "30px",
    "backgroundColor": "#44546a"
  },
  heading2: {
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "70px",
    "fontWeight": "600",
    "textAlign": "center"
  },
  underscore: {
    "width": "40px",
    "marginLeft": "8px",
    "paddingLeft": "0px",
    "paddingTop": "2rem"
  },
  missionState: {
    "marginTop": "10px",
    "marginBottom": "40px",
  },
  heading3: {
    "position": "static",
    "marginTop": "30px",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "38px",
    "fontWeight": "400",
    "textAlign": "center"
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
    "padding": "15px 50px 15px 15px",
    "backgroundColor": "#35dda2",
    "color": "#333"
  },
  textWrapper: {
    "paddingLeft": "20%",
    "paddingTop": "1rem"
  },
  enterek: {
    "position": "static",
    "width": "500px",
    "maxHeight": "none",
    "minHeight": "auto",
    "marginTop": "19px",
    "marginBottom": "0px",
    "padding": "10px 10px 26px 20px",
    "borderStyle": "none",
    "borderWidth": "0px",
    "borderColor": "#ef5d68",
    "backgroundColor": "rgba(0, 0, 0, 0.25)",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "18px",
    "lineHeight": "1.5",
    "fontWeight": "400"
  },
  whyImageWrapper: {
    "marginTop": "0px",
    "marginLeft": "0px",
    "paddingLeft": "0px",
    "textAlign": "left"
  },
  monkeyImageWrapper: {},
  whyImage: {
    "position": "static",
    "display": "block",
    "width": "100%",
    "height": "23rem",
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
    "height": "23rem",
    "alignItems": "center",
    "backgroundImage": "url(https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf44da5ad64f3c268854a4_Help.gif)",
    "backgroundPosition": "100% 0%",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat"
  },
  monkeyTextWrapper: {
    "width": "100%",
    "height": "23rem",
    "padding": "1rem 15px 15px 50px",
    "backgroundColor": "#fd6c7d",
  },
  paragraphRight: {
    "display": "block",
    "width": "500px",
    "marginTop": "0px",
    "marginBottom": "0px",
    "padding": "5px",
    "backgroundColor": "rgba(0, 0, 0, 0.25)",
    "fontFamily": "Roboto, sans-serif",
    "font-weight": "500",
    "color": "#fff",
    "fontSize": "30px",
    "lineHeight": "1.5",
    "textAlign": "left",
    "letterSpacing": "0px"
  },
  wyroznienie: {
    "paddingRight": "6px",
    "paddingLeft": "7px",
    "borderStyle": "solid",
    "borderWidth": "2px",
    "borderColor": "#08afc3",
    "borderRadius": "9px",
    "backgroundColor": "azure",
    "opacity": "1",
    "color": "#08afc3",
    "fontSize": "17px",
    "fontWeight": "700"
  },
  section2: {
    "position": "relative",
    "height": "100%",
    "maxHeight": "100vh",
    "minHeight": "100vh",
    "padding": "30px",
    "backgroundColor": "#4ac9e3"
  },
  image3: {
    "paddingBottom": "0px",
    "lineHeight": "70px"
  },
  slideTitle: {
    "marginBottom": "0px",
    "paddingRight": "30px",
    "paddingLeft": "30px",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "70px",
    "fontWeight": "600",
    "textAlign": "center"
  },
  divBlock7: {
    "position": "absolute",
    "left": "0%",
    "top": "0%",
    "right": "0%",
    "bottom": "0%",
    "width": "100%",
    "height": "80%",
    "paddingLeft": "0px",
  },
  divBlock6: {
    "position": "relative",
    "left": "0px",
    "top": "149px",
    "display": "block",
    "width": "40vh",
    "height": "65vh",
    "maxHeight": "650px",
    "marginRight": "20px",
    "marginLeft": "20px",
    "paddingTop": "0px",
    "paddingLeft": "0px",
    "borderStyle": "solid",
    "borderWidth": "5px",
    "borderColor": "#74ffe1",
    "backgroundColor": "transparent"
  },
  gap: {
    "width": "2%"
  },
  divBlock9: {
    "position": "relative",
    "width": "100%",
  },
  simplicityHeader: {
    "fontWeight": "bold",
    "lineHeight": "34px",
    "margin": "25px 16px 9px",
    "paddingTop": "3px",
    "paddingBottom": "3px",
    "borderStyle": "solid",
    "borderWidth": "4px",
    "borderRadius": "40px",
    "fontSize": "20px",
    "fontFamily": "Roboto, sans-serif",
    "color": "#08afc3",
    "backgroundColor": "azure",
    "textAlign": "center"
  },
  heading11: {
    "position": "relative",
    "margin": "15px 16px 16px",
    "paddingRight": "0px",
    "backgroundColor": "transparent",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontWeight": "400",
    "fontSize": "1rem",
    "textAlign": "justify"
  },
  transparencyWrapper: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "relative",
    "left": "0px",
    "top": "149px",
    "display": "block",
    "width": "40vh",
    "height": "65vh",
    "maxHeight": "650px",
    "marginRight": "20px",
    "marginLeft": "20px",
    "paddingTop": "0px",
    "paddingLeft": "0px",
    "borderStyle": "solid",
    "borderWidth": "5px",
    "backgroundColor": "transparent",
    "borderColor": "#e01563"
  },
  image4: {
    "position": "relative",
    "width": "100%",
    "height": "130px",
    "paddingTop": "15px"
  },
  transparencyHeader: {
    "boxSizing": "border-box",
    "fontWeight": "bold",
    "lineHeight": "34px",
    "margin": "25px 16px 9px",
    "paddingTop": "3px",
    "paddingBottom": "3px",
    "borderStyle": "solid",
    "borderWidth": "4px",
    "borderRadius": "40px",
    "fontSize": "20px",
    "fontFamily": "Roboto, sans-serif",
    "textAlign": "center",
    "borderColor": "#08afc3",
    "backgroundColor": "azure",
    "color": "#e01563"
  },
  divBlock6CommitmentWrapper: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "relative",
    "left": "0px",
    "top": "149px",
    "display": "block",
    "width": "40vh",
    "height": "65vh",
    "maxHeight": "650px",
    "marginRight": "20px",
    "marginLeft": "20px",
    "paddingTop": "0px",
    "paddingLeft": "0px",
    "borderStyle": "solid",
    "borderWidth": "5px",
    "backgroundColor": "transparent",
    "borderColor": "#e9a820"
  },
  commitmentIcon: {
    "position": "relative",
    "display": "inline-block",
    "paddingTop": "37px",
    "float": "none",
    "clear": "none"
  },
  commitmentHeader: {
    "boxSizing": "border-box",
    "fontWeight": "bold",
    "lineHeight": "34px",
    "margin": "25px 16px 9px",
    "paddingTop": "3px",
    "paddingBottom": "3px",
    "borderStyle": "solid",
    "borderWidth": "4px",
    "borderRadius": "40px",
    "fontSize": "20px",
    "fontFamily": "Roboto, sans-serif",
    "textAlign": "center",
    "backgroundColor": "azure",
    "borderColor": "#08afc3",
    "color": "#e9a820"
  },
  section3: {
    "position": "relative",
    "display": "block",
    "height": "100%",
    "minHeight": "100vh",
    "padding": "30px",
    "backgroundColor": "#fd6c7d"
  },
  container2wContainer: {
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto",
    "maxWidth": "940px"
  },
  columns2wRow: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "absolute",
    "left": "0%",
    "top": "0%",
    "right": "0%",
    "bottom": "0%",
    "paddingTop": "0px",
    "paddingLeft": "0px",
    "alignItems": "center",
    "marginLeft": "-10px",
    "marginRight": "-10px"
  },
  column2wColwCol4: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "absolute",
    "left": "0%",
    "top": "0%",
    "right": "0%",
    "bottom": "0%",
    "paddingTop": "0px",
    "paddingLeft": "0px",
    "alignItems": "center",
    "marginLeft": "-10px",
    "marginRight": "-10px"
  },
  marcinWrapper: {
    "position": "relative",
    "left": "0%",
    "top": "auto",
    "right": "auto",
    "bottom": "0%"
  },
  profileHeadlineMarcin: {
    "position": "relative",
    "top": "30px",
    "zIndex": "auto",
  },
  productIcon: {
    "position": "relative",
    "left": "-10px",
    "marginLeft": "0px",
    "paddingLeft": "0px",
    "WebkitAlignSelf": "center",
    "MsFlexItemAlign": "center",
    "MsGridRowAlign": "center",
    "alignSelf": "center",
  },
  crewHeader: {
    "position": "relative",
    "paddingTop": "0px",
    "WebkitAlignSelf": "center",
    "MsFlexItemAlign": "center",
    "MsGridRowAlign": "center",
    "alignSelf": "center",
    "fontFamily": "Roboto, sans-serif",
    "color": "#44546a",
    "textAlign": "center",
    "letterSpacing": "1px"
  },
  divBlock9MarcinProfile: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "relative",
    "width": "100%",
  },
  simplicityImageMarcinProfile: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "verticalAlign": "middle",
    "position": "relative",
    "left": "auto",
    "display": "block",
    "textAlign": "center",
    "width": "auto",
    "height": "auto",
    "maxWidth": "80%",
    "paddingTop": "20px"
  },
  column3wColwCol4: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "relative",
    "float": "left",
    "minHeight": "1px",
    "paddingLeft": "10px",
    "paddingRight": "10px",
    "width": "33.33333333%",
    "alignSelf": "center"
  },
  pioWrapper: {
    "position": "relative"
  },
  simplicityImagePiotrProfile: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "verticalAlign": "middle",
    "position": "relative",
    "left": "auto",
    "display": "block",
    "width": "auto",
    "height": "auto",
    "border": "1px none #000",
    "textAlign": "center",
    "maxWidth": "80%",
    "paddingTop": "20px"
  },
  profileHeadlinePiotr: {
    "position": "relative",
    "top": "30px",
    "alignItems": "center"
  },
  image5: {
    "position": "relative",
    "left": "-10px",
  },
  column4wColwCol4: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "relative",
    "float": "left",
    "minHeight": "1px",
    "paddingLeft": "10px",
    "paddingRight": "10px",
    "width": "33.33333333%",
    "alignSelf": "center"
  },
  matthiasWrapper: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box"
  },
  profileGrowthWrapper: {
    "position": "relative",
    "top": "30px",
    "alignItems": "center"
  },
  growthIcon: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "height": "44px",
    "boxSizing": "border-box",
    "border": "0",
    "maxWidth": "100%",
    "verticalAlign": "middle",
    "display": "inline-block",
    "position": "relative",
    "left": "-10px"
  },
  divBlock9MattProfile: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "position": "relative",
    "width": "100%",
  },
  simplicityImageMattProfile: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "verticalAlign": "middle",
    "position": "relative",
    "left": "auto",
    "display": "block",
    "width": "auto",
    "height": "auto",
    "border": "1px none #000",
    "textAlign": "center",
    "maxWidth": "80%",
    "paddingTop": "20px"
  },
  simplicityIcon: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "maxWidth": "100%",
    "verticalAlign": "middle",
    "position": "relative",
    "left": "auto",
    "display": "block",
    "paddingTop": "15px",
    "border": "1px none #000",
    "textAlign": "center",
    "width": "110px",
    "height": "130px"
  },
  theEnd: {
    paddingTop: '10%',
    width: '70%',
    marginLeft: '15%'
  },
  theEndImage: {
    width: '80vw',
    paddingTop: '8vh',
    paddingBottom: '3vh',
    position: 'relative',
  },
  goBackImage: {
    paddingTop: '8vh',
    width: '90vw',
  },
  theEndTitle: {
    color: 'white',
    fontSize: '3rem'
  }
});

class TheEndSlide extends React.Component {
  render() {
    const {classes} = this.props;
    return <>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={{xs: 12}}
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Grid
          item
          md={10} style={{textAlign: 'center'}}
        >
          <img
            src={"https://media.giphy.com/media/3ohs86vZAWiJXWvQI0/giphy.gif"}
            className={classes.theEndImage}
          />
        </Grid>
        <Grid item md={10} style={{textAlign: 'center'}}>
          <Link to={'/'} style={{color: 'white'}}>
            <img
              src={'https://media.giphy.com/media/hsPUkN1zcuw7vDlBYI/giphy.gif'}
              className={classes.goBackImage}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  }
}

export default withStyles(styles)(TheEndSlide);
