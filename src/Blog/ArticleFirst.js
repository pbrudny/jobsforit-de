import React from 'react';

import Button from '../common/Button/Button';
import Heading from '../common/Heading';
import articleImg from '../assets/img/article.png';

import style from './ArticleFirst.module.scss';

function ArticleFirst({post}) {
  console.log('p1: ', post);
  return (
    <div className={style.ArticleFirst}>
      <div className={style.ArticleFirst_group}>
        <img
          src={post?.fields?.image?.fields?.file?.url}
          className={style.ArticleFirst_img}
        />
      </div>
      <div className={style.ArticleFirst_group}>
          <span className={style.ArticleFirst_label}>
            Remote
          </span>
        <Heading
          variant='h3'
          className={style.ArticleFirst_heading}
        >
          { post?.fields?.title }
        </Heading>
        <div className={style.ArticleFirst_details}>
          <p className={style.ArticleFirst_detail}>
            By <a href='/'>JobsForIT</a>
          </p>
          <p className={style.ArticleFirst_detail}>
            1 week ago
          </p>
        </div>
        <p className={style.ArticleFirst_description}>
          { post?.fields?.description }
        </p>
        <div className={style.ArticleFirst_btn}>
          <Button
            variant='primary'
            href='/blog-single'
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleFirst;