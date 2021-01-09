/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/womanPhone3.json';
import classes from './index.module.scss';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

// const getLottiePlacement = () => {
//   const scroll_pos = window.scrollY;
//   if (scroll_pos <= 400) return 'hero';
//   else if (scroll_pos > 400 && scroll_pos <= 900) return 'instagram_top';
//   else if (scroll_pos > 900 && scroll_pos <= 1900) return 'instagram_bottom';
//   else if (scroll_pos > 1900 && scroll_pos <= 2700) return 'relationship_quiz';
//   else if (scroll_pos > 2700 && scroll_pos <= 3300) return 'get_in_touch';
//   else if (scroll_pos > 3300 && scroll_pos <= 3700) return 'about_us';
//   else if (scroll_pos > 3700) return 'footer';
// };

const IndexLottie = () => {
  const [lottiePosition, setLottiePosition] = useState({
    bottom: 0,
    left: 40,
  });

  // const moveLottie = useCallback(() => {
  //   const lottiePlacement = getLottiePlacement();

  //   switch (lottiePlacement) {
  //     case 'footer':
  //       setLottiePosition({ bottom: -478, left: 57 });
  //       break;
  //     case 'about_us':
  //       setLottiePosition({ bottom: -421, left: 0 });
  //       break;
  //     case 'get_in_touch':
  //       setLottiePosition({ bottom: -348, left: 57 });
  //       break;
  //     case 'relationship_quiz':
  //       setLottiePosition({ bottom: -273, left: 0 });
  //       break;
  //     case 'instagram_bottom':
  //       setLottiePosition({ bottom: -156, left: 57 });
  //       break;
  //     case 'instagram_top':
  //       setLottiePosition({ bottom: -40, left: 0 });
  //       break;
  //     case 'hero':
  //       setLottiePosition({ bottom: 0, left: 40 });
  //       break;
  //     default:
  //       break;
  //   }
  // }, [lottiePosition.bottom]);

  // useEffect(() => {
  //   window.addEventListener('scroll', moveLottie);

  //   return () => {
  //     window.removeEventListener('scroll', moveLottie);
  //   };
  // }, [moveLottie]);

  return (
    <div className={classes.lottieContainer}>
      <Lottie options={lottieOptions} height="35rem" isClickToPauseDisabled={true} />
    </div>
  );
};

export default IndexLottie;
