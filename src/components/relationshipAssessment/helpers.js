export const parseRelationshipVariables = (questions) => {
  const result = [];
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    if (question.options) {
      const fields = [];
      for (let j = 0; j < question.options.length; j++) {
        const { tag, type, name, options } = question;
        let field = {
          tag,
          type,
          name,
          'cf-label': options[j],
          value: options[j],
        };
        if (j === 0) field['cf-questions'] = question.questionText;
        fields.push(field);
      }
      result.push(fields);
    } else {
      const { tag, type, name, questionText } = question;
      const field = {
        tag,
        type,
        name,
        'cf-questions': questionText,
      };
      result.push(field);
    }
  }

  return result.flat();
};
