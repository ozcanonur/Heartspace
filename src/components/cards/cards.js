import React from 'react';
import Lottie from 'react-lottie';
import * as animationData1 from '../../assets/lottie/consulting.json';
import * as animationData2 from '../../assets/lottie/meditate.json';
import * as animationData3 from '../../assets/lottie/editor2.json';
import classes from './cards.module.scss';

const Cards = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1.default,
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2.default,
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3.default,
  };

  const cards = [
    {
      lottie: defaultOptions1,
      title: 'Relationship Strength Quiz',
      text:
        'Psychology-based relationship assessment will help key areas you can improve in your relationship',
      buttonText: 'Take it now!',
    },
    {
      lottie: defaultOptions2,
      title: 'About us / Who we are',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, nemo! Dicta assumenda rem vel velit, tempore ad minima? Rem similique assumenda, cupiditate voluptatem suscipit rerum?',
      buttonText: 'Contact us',
    },
    {
      lottie: defaultOptions3,
      title: 'Get in touch',
      text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus nostrum eligendi ducimus. Exercitationem, sapiente!',
      buttonText: 'Contact us',
    },
  ];

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        {cards.map((card) => (
          <div className={classes.sectionContainer}>
            <div className={classes.card}>
              <div className={classes.lottieContainer}>
                <Lottie
                  options={card.lottie}
                  width={400}
                  isClickToPauseDisabled={true}
                />
              </div>
              <div className={classes.cardTypography}>
                <div className={classes.cardTitle}>{card.title}</div>
                <div className={classes.cardText}>{card.text}</div>
                <button className={classes.button}>{card.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cards;
