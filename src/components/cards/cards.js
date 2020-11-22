import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { graphql, useStaticQuery, navigate } from 'gatsby';

import ContactModal from './modal';
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

const Cards = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCardAtBottom {
        nodes {
          title
          text
        }
      }
    }
  `);

  const cardContents = data.allContentfulCardAtBottom.nodes;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const navigateToRelationshipAssessment = () => {
    navigate('/relationshipAssessment');
  };

  const cards = [
    {
      id: 'relationshipAssessment',
      lottie: getLottieOptions(consulting),
      title: cardContents[2].title,
      text: cardContents[2].text,
      buttonText: 'Take it now!',
      onClick: navigateToRelationshipAssessment,
    },
    {
      id: 'getInTouch',
      lottie: getLottieOptions(editor2),
      title: cardContents[1].title,
      text: cardContents[1].text,
      buttonText: 'Contact us',
      onClick: openModal,
    },
    {
      id: 'aboutUs',
      lottie: getLottieOptions(meditate),
      title: cardContents[0].title,
      text: cardContents[0].text,
    },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.cards}>
        {cards.map(({ id, lottie, title, text, buttonText, onClick }) => (
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
                    <button className={classes.button} onClick={onClick}>
                      {buttonText}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
};

export default Cards;
