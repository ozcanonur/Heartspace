import React, { useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';
import { questions } from './quizQuestions';
import { parseQuestions } from './helpers';

const RelationshipAssessment = () => {
  const ref = useRef(null);

  const formFields = parseQuestions(questions);

  const submitCallback = function () {
    const formDataSerialized = this.getFormData(true);
    console.log('Formdata, obj:', formDataSerialized);
    this.addRobotChatResponse(
      `Well done. We are done.&&Reflecting back and regularly assessing your relationship is an important first step.&&Give us a moment while we analyse your answers…`
    );
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
