import React from 'react';
import classes from './cards.module.scss';

const Cards = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sectionContainer}>
        <div className={classes.img} />
        <div className={classes.card}>
          <div className={classes.cardTitle}>Relationship Strength Quiz</div>
          <div className={classes.cardText}>
            Psychology-based relationship assessment will help key areas you can
            improve in your relationship
          </div>
          <button className={classes.button}>Check it out!</button>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.img} />
        <div className={classes.card}>
          <div className={classes.cardTitle}>About us / Who are we?</div>
          <div className={classes.cardText}>
            We'd love to hear from you! Get in touch to Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Rerum numquam laboriosam
            voluptatem consequatur cupiditate voluptas! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Repellat, optio.
          </div>
          <button className={classes.button}>Check it out!</button>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.img} />
        <div className={classes.card}>
          <div className={classes.cardTitle}>Relationship Strength Quiz</div>
          <div className={classes.cardText}>
            Psychology-based relationship assessment will help key areas you can
            improve in your relationship
          </div>
          <button className={classes.button}>Check it out!</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
