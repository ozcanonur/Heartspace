import React, { useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';
import { questions } from './quizQuestions';
import { parseQuestions, getFullScore } from './helpers';

const RelationshipAssessment = () => {
  const ref = useRef(null);

  const formFields = parseQuestions(questions);

  const submitCallback = async function () {
    const formDataSerialized = this.getFormData(true);

    this.addRobotChatResponse(
      `Well done. We are done.&&Reflecting back and regularly assessing your relationship is an important first step.&&Give us a moment while we analyse your answers&&...`
    );

    const { score, classification } = getFullScore(formDataSerialized);

    setTimeout(() => {
      this.addRobotChatResponse(
        `We have your relationship strength score.&&Your score is ${score}.&&What does this mean?&&The questions in this assessment are based on a psychological research and thousands of couples have taken it since 2016.`
      );

      let nextLineAdditionalText =
        classification === 'Lower than average'
          ? ' is almost as high as '
          : classification === 'Average'
          ? ' similar to '
          : classification === 'Higher than average'
          ? ' higher than '
          : '';

      this.addRobotChatResponse(
        `Compared to everyone else, your relationship score is${nextLineAdditionalText}most couples.`
      );

      if (classification === 'Lower than average') this.addRobotChatResponse(`Don't fret!`);

      nextLineAdditionalText = classification === 'Higher than average' ? 'even further ' : '';
      this.addRobotChatResponse(
        `That is great news.&&Because your relationship is very open to ${nextLineAdditionalText}improvement with the right approach.&&And taking this assessment was an important first step.&&Would you like a more in-depth analysis?`
      );

      // Need to continue convo here somehow
    }, 8000);
  };

  // Conversational form object is tied to window object
  // Maybe add dispatcher like that
  useEffect(() => {
    const cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        preventAutoFocus: false,
        theme: 'dark',
        showProgressBar: true,
        userInterfaceOptions: {
          robot: {
            robotResponseTime: 0,
            chainedResponseTime: 750,
          },
        },
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });
    ref.current.appendChild(cf.el);
  }, []);

  return <div ref={ref} />;
};

export default RelationshipAssessment;
