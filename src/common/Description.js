import React, {Component} from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import PropTypes from "prop-types";
import Heading from './Heading';

class Description extends Component {
  render() {
    const {
      titleA, titleB, titleC, titleD, descriptionA, descriptionB, descriptionC, descriptionD,
      titleE, descriptionE,
      description
    } = this.props.job.fields;
    return (
      <div>
        { description && documentToReactComponents(description) }

        { titleA && 
        <Heading variant="h3">
          { titleA }  
        </Heading>
        }
        { descriptionA &&
        <div className={this.props.className}>
          { documentToReactComponents(descriptionA) }
        </div>
        }

        { titleB &&
        <Heading variant="h3">
          { titleB }  
        </Heading>
        }
        { descriptionB &&
        <div className={this.props.className}>
          { documentToReactComponents(descriptionB) }
        </div>
        }

        { titleC &&
        <Heading variant="h3">
          { titleC }  
        </Heading>
        }
        { descriptionC &&
        <div className={this.props.className}>
          { documentToReactComponents(descriptionC) }
        </div>
        }

        { titleD &&
        <Heading variant="h3">
          { titleD }  
        </Heading>
        }
        { descriptionD &&
        <div className={this.props.className}>
          { documentToReactComponents(descriptionD) }
        </div>
        }

        { titleE &&
        <Heading variant="h3">
          { titleE }  
        </Heading>
        }
        { descriptionE &&
        <div className={this.props.className}>
          { documentToReactComponents(descriptionE) }
        </div>
        }
      </div>
    )
  }
}

Description.propTypes = {job: PropTypes.any};
export default Description;
