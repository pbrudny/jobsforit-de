import React from 'react';
import {Link} from 'react-router-dom';

import Heading from '../common/Heading';
import tutorialImg from '../assets/img/temp-tutorialItem-img.png';

import style from './Article.module.scss';

function Article({post}) {
  return (
    <Link to='/blog-single' className={style.Article}>
      <div className={style.Article_top}>
        <div className={style.Article_imgWrapper}>
          <img
            src={post?.fields?.image?.fields?.file?.url}
            className={style.Article_img}
          />
        </div>
        <div className={style.Article_group}>
            <h4 className={style.Article_heading}>
                {post.fields.title}
            </h4>
          <span className={style.Article_detail}>
              JobsForIT
            </span>
          <span className={style.Article_detail}>
              Jun 2 . { post.minToRead }min
            </span>
        </div>
      </div>
      <p className={style.Article_description}>
        { post.fields.description }
      </p>
    </Link>
  );
}

export default Article;