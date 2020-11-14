import React from 'react';
import Lottie from 'react-lottie';
import * as consulting from '../../assets/lottie/consulting.json';
import * as meditate from '../../assets/lottie/meditate.json';
import * as editor2 from '../../assets/lottie/editor2.json';
import classes from './cards.module.scss';

const getLottieOptions = (animationData) => {
  return {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };
};

const cards = [
  {
    id: 'relationshipAssessment',
    lottie: getLottieOptions(consulting),
    title: 'Relationship Strength Quiz',
    text:
      'Psychology-based relationship assessment will help key areas you can improve in your relationship',
    buttonText: 'Take it now!',
  },
  {
    id: 'getInTouch',
    lottie: getLottieOptions(editor2),
    title: 'Get in touch',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus nostrum eligendi ducimus. Exercitationem, sapiente!',
    buttonText: 'Contact us',
  },
  {
    id: 'aboutUs',
    lottie: getLottieOptions(meditate),
    title: 'About us / Who we are',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, nemo! Dicta assumenda rem vel velit, tempore ad minima? Rem similique assumenda, cupiditate voluptatem suscipit rerum?',
  },
];

const Cards = () => {
  return (
    <section className={classes.container}>
      <div className={classes.cards}>
        {cards.map(({ id, lottie, title, text, buttonText }) => (
          <div key={id} id={id} className={classes.cardContainer}>
            <div className={classes.card}>
              <div className={classes.lottieContainer}>
                <Lottie
                  options={lottie}
                  width="40rem"
                  isClickToPauseDisabled={true}
                />
              </div>
              <div className={classes.cardTypography}>
                <h3 className={classes.cardTitle}>{title}</h3>
                <article className={classes.cardText}>{text}</article>
                {buttonText ? (
                  <div className={classes.buttonContainer}>
                    <button className={classes.button}>{buttonText}</button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
