import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import TopNav from 'common/TopNav/TopNav';
import Container from 'common/Container/Container';
import Heading from 'common/Heading';
import arrowLeftDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import ArticleFirst from './ArticleFirst';
import Article from './Article';

import style from './Blog.module.scss';
import staticStyle from '../static/Static.module.scss';
import {getPosts} from "../contentfulClient";
import {LinearProgress} from "@material-ui/core";

function Blog() {
  const [posts, setPosts] = useState([]);

  SwiperCore.use([Navigation]);

  useEffect(async () => {
    try {
      const postsData = await getPosts();
      setPosts(postsData.items)
    } catch (error) {
      console.log(error);
    }
  },[]);

  if (posts.length <= 0) {
    return <LinearProgress/>
  }

  console.log(posts)

  return (
    <>
      <TopNav/>
      <div className={style.Blog_top}>
        <Container>
          <button className={staticStyle.Static_top_btn}>
            <img
              src={arrowLeftDarkGray}
            />
          </button>
          <Heading
            variant='h2'
            className={style.Blog_top_heading}
          >
            Article of the week!
          </Heading>
          <ArticleFirst post={posts[0]}/>
        </Container>
      </div>
      <div className={style.Blog_wrapper}>
        <Container>
          <Heading
            variant='h3'
            className={style.Blog_heading}
          >
            Most popular
          </Heading>
          <div className={style.Blog_sliderSection}>
            <Swiper
              navigation
              spaceBetween={16}
              slidesPerView={'auto'}
              className={style.Blog_slider}
              breakpoints={{
                992: {
                  spaceBetween: 40,
                  slidesPerView: 3
                }
              }}
            >
              { posts.slice(0, 4).map(post => {
                return (
                  <SwiperSlide className={style.Blog_slider_slide}>
                    <Link
                      to='/'
                      className={style.Blog_slider_slide_link}>
                      <div className={style.Blog_slider_slide_top}>
                        <img
                          src={ post.fields.image.fields.file.url }
                          className={style.Blog_slider_slide_img}
                        />
                        <div className={style.Blog_slider_slide_imgContent}>
                          <h3 className={style.Blog_slider_slide_heading}>
                            { post.fields.title }
                          </h3>
                          <div className={style.Blog_slider_slide_details}>
                            <p className={style.Blog_slider_slide_detail}>JobsForIt</p>
                            <p className={style.Blog_slider_slide_detail}>Jun 2 . { post.fields.minToRead }min</p>
                          </div>
                        </div>
                      </div>
                      <p className={style.Blog_slider_slide_description}>
                        { post.fields.description }
                      </p>
                    </Link>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <Heading
            variant='h3'
            className={style.Blog_heading}
          >
            All articles
          </Heading>
          <ul className={style.Blog_list}>
            { posts.map(post => {
              return (
                <li className={style.Blog_item}>
                  <Article post={post} />
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    </>
  )
}

export default Blog;