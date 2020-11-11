import React from 'react';
import classes from './community.module.scss';

const Community = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Community Story</div>
      <div className={classes.subTitle}>
        Changing my thoughts has changed my relationship
      </div>
      <div className={classes.storyContainer}>
        <div className={classes.img} />
        <div className={classes.storyText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          accusantium facilis saepe et expedita magni asperiores modi hic
          mollitia iusto enim nostrum quae facere laborum, placeat provident,
          nihil incidunt doloremque! Officiis consequuntur libero vitae
          mollitia? Sed quia, temporibus a consectetur ratione nesciunt, iure
          tempora atque incidunt debitis ad, neque fuga?
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.footerImg} />
        <div className={classes.footerText}>Sarah from London, UK</div>
      </div>
    </div>
  );
};

export default Community;
