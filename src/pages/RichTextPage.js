import React, {Component, useContext} from "react";
import TopNav from "../common/TopNav/TopNav";
import {CircularProgress, Paper } from "@material-ui/core";
import store from "../stores/store";
import {observer} from "mobx-react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MobileTopNav from "../common/MobileTopNav";
import {isMobile, isTablet} from "react-device-detect";
import windowSize from 'react-window-size';
import {ThemeContext} from "../themeContext";

//TODO: move that to hooks
class RichTextPage extends Component {
  state = {
    mobileTablet: false
  };

  componentDidMount() {
    if (store.pages.length === 0) store.getPages();
    this.setState({mobileTablet: isMobile || isTablet || this.props.windowWidth < 1100});
  }

  render() {
    const { pages } = store;

    if (!pages.length > 0) {
      return (
        <CircularProgress />
      )
    }

    if (this.state.mobileTablet) {
      return (
        <div>
          <MobileTopNav />
          <Paper style={{
            width: '100%',
            margin: '0 auto',
            padding: '1rem'
          }}>
            { documentToReactComponents(store.pages[this.props.pageNumber].fields.richText) }
          </Paper>
        </div>
      )
    } else {
      return (
        <div>
          <TopNav />
          <Paper style={{
            width: '50%',
            margin: '0 auto',
            padding: '5rem'
          }}>
            { documentToReactComponents(store.pages[this.props.pageNumber].fields.richText) }
          </Paper>
        </div>
      )
    }
  }
}

RichTextPage = observer(RichTextPage);
RichTextPage = windowSize(RichTextPage);
export default RichTextPage;

