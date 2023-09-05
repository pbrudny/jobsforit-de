import React, {Component} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Row, Col} from "antd";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Scroller extends Component {
  state = {
    items: Array.from({ length: 30 })
  };
  
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    console.log('more');
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 30 }))
      });
    }, 1500);
  };

  render() {
    const { classes, jobs } = this.props;

    return (
      // <div style={{overflow: "auto"}}>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      // </div>
    );
  }
}

export default Scroller;

