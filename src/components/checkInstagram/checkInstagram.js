import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import classes from './checkInstagram.module.scss';

const CheckInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCheckInstagram {
        title
        subtitle1
        subtitle2
        images {
          file {
            url
          }
        }
      }
    }
  `);

  const { title, subtitle1, subtitle2, images } = data.contentfulCheckInstagram;

  const imageUrls = images.map((image) => image.file.url);

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  const instagramPosts = [
    {
      src: imageUrls[0],
      alt: 'Instagram post 1',
    },
    {
      src: imageUrls[1],
      alt: 'Instagram post 2',
    },
    {
      src: imageUrls[2],
      alt: 'Instagram post 3',
    },
  ];

  return (
    <section id="community" className={classes.container}>
      <div className={classes.subContainer}>
        <h2 className={classes.heading}>
          <p className={classes.headingTitle}>{title}</p>
          <p className={classes.headingSubTitle}>{subtitle1}</p>
          <p className={classes.headingSubTitle2}>{subtitle2}</p>
        </h2>
        <div className={classes.imgContainer}>
          {instagramPosts.map(({ src, alt }) => (
            <img key={alt} className={classes.img} src={src} alt={alt} />
          ))}
        </div>
        <button onClick={redirectToInstagram} className={classes.button}>
          Join our community
        </button>
      </div>
    </section>
  );
};

export default CheckInstagram;
