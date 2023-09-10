import React, { useContext } from 'react';
import Container from "./Container/Container";
import { ThemeContext } from "../themeContext";
import Heading from "./Heading";
import style from './Hero.module.scss';

const Hero = ({ heading, description, heroImage }) => {
  const themeContext = useContext(ThemeContext);

  const classes = [style.Hero];

  if (themeContext.theme === 'dark') {
    classes.push(style.Hero_dark);
  } else {
    classes.push(style.Hero_light);
  }

  const imageUrl = heroImage.fields.url || heroImage.fields.image.fields.file.url;
  const imageAlt = heroImage.fields.name;

  return (
    <div className={classes.join(' ')}>
      <Container>
        <div className={style.Hero__cols}>
          <div className={`${style.Hero__col} ${style.Hero__col_content}`}>
            <Heading variant='h2' theme={themeContext.theme} className={style.Hero__heading}>
              {heading}
            </Heading>
            <p className={style.Hero__description}>
              {description}
            </p>
          </div>
          <div className={`${style.Hero__col} ${style.Hero__col_img}`}>
            <img
              className={style.Hero__img}
              src={imageUrl}
              alt={imageAlt}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
