import React from 'react';
import Container from "./Container/Container";
import {ThemeContext} from "../themeContext";
import Heading from "./Heading";
import {toJS} from 'mobx';
import style from './Hero.module.scss';

class Hero extends React.Component {
  render() {
    const themeContext = this.context;

    const classes = [style.Hero];

    if (themeContext.theme === 'dark') {
      classes.push(style.Hero_dark);
    } else {
      classes.push(style.Hero_light);
    }

    return (
      <div className={classes.join(' ')}>
        <Container>
          <div className={style.Hero__cols}>
            <div className={[style.Hero__col, style.Hero__col_content].join(' ')}>
              <Heading variant='h2' theme={themeContext.theme} className={style.Hero__heading}>
                {this.props.heading}
              </Heading>
              <p className={style.Hero__description}>
                {this.props.description}
              </p>
            </div>
            <div className={[style.Hero__col, style.Hero__col_img].join(' ')}>
              <img
                className={style.Hero__img}
                 src={this.props.heroImage.fields.url || this.props.heroImage.fields.image.fields.file.url}
                 alt={this.props.heroImage.fields.name}
              />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

Hero.contextType = ThemeContext;

export default Hero;