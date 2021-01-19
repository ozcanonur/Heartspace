import axios from 'axios';

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
    case 'Not at all true':
      score += 1;
      break;
    case 'A tiny bit':
      score += 2;
      break;
    case 'A little true':
      score += 2;
      break;
    case 'A little':
      score += 3;
      break;
    case 'Somewhat true':
      score += 3;
      break;
    case 'Somewhat':
      score += 4;
      break;
    case 'Mostly true':
      score += 4;
      break;
    case 'Mostly':
      score += 5;
      break;
    case 'Very true':
      score += 5;
      break;
    case 'Very Extremely':
      score += 6;
      break;
    case 'Completely true':
      score += 6;
      break;
    default:
      break;
  }

  let isPositiveQuestion = true;

  if (
    questionName === 'howBad' ||
    questionName === 'howEmpty' ||
    questionName === 'howLifeless' ||
    questionName === 'howMiserable'
  ) {
    isPositiveQuestion = false;
  }

  return { score, isPositiveQuestion };
};

export const getPositiveAndNegativeScores = (answers) => {
  let positivesScore = 0, negativesScore = 0;
  Object.keys(answers).forEach((question) => {
    let { score, isPositiveQuestion } = getQuestionScore(question, answers[question][0]);
    if (isPositiveQuestion) {
      positivesScore += score;
    } else {
      negativesScore += score;
    }
  });
  return { positivesScore, negativesScore };
};

const makeRetriableQuestionResponseRequest = (params, numAttempts) => {
  console.log("Attempting new question response request");

  const maxAttempts = 200;
  const retryPeriod = numAttempts * 1000 / 2;

  if (numAttempts > maxAttempts) {
    console.log("Out of retries");
    return;
  }

  axios.post('https://heartspacerelweb.herokuapp.com/assessment/questionResponse', params)
    .then((resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        console.log("Successful request");
      } else {
        console.error("Failed request. ", resp.status, "Attempting retry...");
        setTimeout(() => {
           makeRetriableQuestionResponseRequest(params, numAttempts + 1);
        }, retryPeriod);
      }
    }, (e) => {
        console.error("Failed request. ", e, "Attempting retry...");
        setTimeout(() => {
          makeRetriableQuestionResponseRequest(params, numAttempts + 1);
        }, retryPeriod);
  });;
};

const extractAnswerOutOfSpan = (innerHTML) => {
  let start = innerHTML.indexOf("<span>");
  if (start !== -1) {
    let end = innerHTML.indexOf("</span>");
    if (end !== -1) {
      let actualStart = start + "<span>".length;
      return innerHTML.substring(actualStart, end);
    }
  }
  console.error("We're in trouble");
  return '';
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
          if (buttonInnerHTML.includes('span')) {
            answer = extractAnswerOutOfSpan(buttonInnerHTML);
          }

          const params = { sessionId, question: question.textContent, answer };
          makeRetriableQuestionResponseRequest(params, 1);
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
          if (checkbox.getAttribute('checked') === 'checked') {
            let checkedBoxText = extractAnswerOutOfSpan(checkbox.innerHTML);
            checkedBoxTexts.push(checkedBoxText);
          }
        }

        const params = { sessionId, question: question.textContent, answer: checkedBoxTexts.join(' "and" ') };
        makeRetriableQuestionResponseRequest(params, 1);
      };

      inputButton.addEventListener('click', reference);
    }
  }
};

export const isValidEmail = (email) => email.trim().length !== 0 && email.includes('@') && email.includes('.');

export const makeSessionId = (length) => {
  const now = new Date();
  const secondsSinceEpoch = Math.round(now.getTime() / 1000);

  let randomCharacters = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    randomCharacters += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  const sessionId = `${secondsSinceEpoch.toString()}_${randomCharacters}`;

  return sessionId;
};
