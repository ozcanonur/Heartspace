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

const getQuestionScore = (questionName, answer) => {
  let score = 0;
  switch (answer) {
    case 'Not at all':
      score += 1;
      break;
    case 'A tiny bit':
      score += 2;
      break;
    case 'A little':
      score += 3;
      break;
    case 'Somewhat':
      score += 4;
      break;
    case 'Mostly':
      score += 5;
      break;
    case 'Very Extremely':
      score += 6;
      break;
    default:
      break;
  }

  if (
    questionName === 'howBad' ||
    questionName === 'howEmpty' ||
    questionName === 'howLifeless' ||
    questionName === 'howMiserable'
  )
    score *= -1;

  return score;
};

export const getFullScore = (answers) => {
  let score = 0;
  Object.keys(answers).forEach((question) => {
    score += getQuestionScore(question, answers[question][0]);
  });

  let classification = '';
  if (score < 14) classification = 'Lower than average';
  else if (score > 17) classification = 'Higher than average';
  else classification = 'Average';

  return { score, classification };
};
