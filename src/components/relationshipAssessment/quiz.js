import React, { useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';
import { questions } from './quizQuestions';
import { parseRelationshipVariables } from './helpers';

const RelationshipAssessment = () => {
  const ref = useRef(null);

  const formFields = parseRelationshipVariables(questions);

  const submitCallback = function () {
    const formDataSerialized = this.getFormData(true);
    console.log('Formdata, obj:', formDataSerialized);
    this.addRobotChatResponse(
      `Well done, <name>! We are done.&&Reflecting back and regularly assessing your relationship is an important first step.&&Give us a moment while we analyse your answers…`
    );
  };

  useEffect(() => {
    const cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        preventAutoFocus: true,
        theme: 'dark',
        showProgressBar: true,
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });
    ref.current.appendChild(cf.el);
  }, []);

  return <div ref={ref} />;
};

export default RelationshipAssessment;
