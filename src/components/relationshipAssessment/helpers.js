const parseMultipleSelectionQuestion = (question) => {
  const { tag, type, name } = question;
  const fields = [];
  question.options.forEach((option, index) => {
    const field = {
      tag,
      type,
      name,
      'cf-label': option,
      value: option,
    };
    if (index === 0) field['cf-questions'] = question.questionText;
    fields.push(field);
  });

  return fields;
};

const parseTextInputQuestion = (question) => {
  const { tag, type, name, questionText, conditional } = question;
  const field = {
    tag,
    type,
    name,
    'cf-questions': questionText,
    [`cf-conditional-${name}`]: conditional,
  };

  return field;
};

export const parseQuestions = (questions) => {
  const result = [];
  questions.forEach((question) => {
    // If it's single/multiple selection
    if (question.options) {
      const fields = parseMultipleSelectionQuestion(question);
      result.push(fields);
    } else {
      // If it's input
      const field = parseTextInputQuestion(question);
      result.push(field);
    }
  });

  return result.flat();
};
