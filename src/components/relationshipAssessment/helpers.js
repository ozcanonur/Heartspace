import axios from 'axios';
import { questions } from './quizQuestions';

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

export const makeRandomSessionId = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

let reference;
export const attachAnswerButtonListeners = async (sessionId) => {
  const uniqueQuestions = {};

  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Find the question
    const pElements = document.getElementsByTagName('p');
    if (!pElements || pElements.length === 0) continue;

    let question = pElements[pElements.length - 1];

    const pClassList = question.parentElement.parentElement.classList;
    let isRobotResponse = false;
    for (const pClass of pClassList) {
      if (pClass === 'robot') isRobotResponse = true;
    }

    if (!isRobotResponse) continue;

    // Continue if question is already processed
    if (uniqueQuestions[question.textContent]) continue;
    uniqueQuestions[question.textContent] = true;

    const checkboxes = document.getElementsByClassName('cf-checkbox-button');
    if (!checkboxes || checkboxes.length === 0) {
      const buttons = document.getElementsByClassName('cf-button');
      for (const button of buttons) {
        button.addEventListener('click', (event) => {
          // Text of the clicked button
          const buttonInnerHTML = event.target.innerHTML;

          // Fix to ignore clicking at middle or around
          let answer = buttonInnerHTML;
          if (buttonInnerHTML.includes('span')) answer = buttonInnerHTML.match(RegExp(`(?<=span>)(.*)(?=</span)`))[0];

          const params = { sessionId, question: question.textContent, answer };
          axios.post('https://heartspacerelweb.herokuapp.com/assessment/questionResponse', params);
        });
      }
    } else if (checkboxes && checkboxes.length !== 0) {
      const inputButton = document.getElementsByClassName('cf-input-button')[0];
      if (!inputButton) return;

      inputButton.removeEventListener('click', reference);

      reference = () => {
        const checkboxes = document.getElementsByClassName('cf-checkbox-button');

        const checkedBoxTexts = [];
        for (const checkbox of checkboxes) {
          if (checkbox.getAttribute('checked') === 'checked')
            checkedBoxTexts.push(checkbox.innerHTML.match(RegExp(`(?<=span>)(.*)(?=</span)`))[0]);
        }

        const params = { sessionId, question: question.textContent, answer: checkedBoxTexts.join(' "and" ') };
        axios.post('https://heartspacerelweb.herokuapp.com/assessment/questionResponse', params);
      };

      inputButton.addEventListener('click', reference);
    }
  }
};
