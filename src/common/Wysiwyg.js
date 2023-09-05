import React, {Component} from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

class Wysiwyg extends Component {
    render() {
        return(
            <div className={this.props.className || ''}>
                {documentToReactComponents(this.props.children)}
            </div>
        );
    }
}

export default Wysiwyg;