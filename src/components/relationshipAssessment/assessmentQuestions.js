function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var problemsOptions = [
  'Conflict or communication issues',
  'Betrayal or lack of honesty',
  'Lack of sex',
  'Boredom/loss of excitement or passion',
  'Lack of appreciation',
  // 'Other' => User can type
];

var contributingIssuesOptions = [
  'Feeling the relationship is one-sided',
  'The friendship or sharings fading away',
  'Competing priorities in the relationship',
  'Everyday worries (laundry, kids, etc.) turning into tension',
  'In-laws or third parties involvement',
  'Growing apart, having different perspectives, values or beliefs',
  'Anger',
  'Having a controlling or demanding personality',
  'Substance abuse',
  // 'Other', => User can type
];

var pastThreeMonthsOptions = [
  'Infidelity/cheating',
  'Not listening',
  'Money/finances related problems',
  'Inability to tolerate',
  'Lack of intimacy',
  'Resentment',
  'Mental health issues',
  'Physical health issues',
  'Lack of appreciation',
  'Other',
];

shuffleArray(problemsOptions);
shuffleArray(contributingIssuesOptions);
shuffleArray(pastThreeMonthsOptions);

export const questions = [
  {
    tag: 'input',
    type: 'radio',
    name: 'started',
    questionText:
      'Welcome to our psychological research-based relationship strength assessment.&&These questions are based on the journal research paper published by the Psychological Association.&&It will take you about 2 minutes to complete this test.&&Are you ready?',
    options: [`Yes, let's start!`, 'No, not yet.'],
  },
  {
    tag: 'input',
    type: 'text',
    name: 'started',
    questionText: 'No worries - come back when you feel ready. We will be here for you.',
    conditional: 'No, not yet.',
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'age',
    questionText:
      'Great!&&Note that your privacy matters to us. Your answers are 100% confidential and anonymous through our secure technology.&&Firstly, can you tell us a bit about yourself?&&This will help our expert system to finetune its analysis.&&How old are you?',
    options: ['17 or younger', '18-25', '26-34', '35-43', '44-55', '56-65', '66 or older'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'gender',
    questionText: 'Your gender?',
    options: [
      'Female',
      'Male',
      'Non-binary',
      'Prefer not to say',
      'Do not know',
      // 'Other' => Custom condition
    ],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'sexualOrientation',
    questionText: 'What is your sexual orientation?',
    options: [
      'Heterosexual',
      'Gay / Lesbian',
      'Bisexual',
      'Prefer not to say',
      'Do not know',
      // 'Other' => Custom condition
    ],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'relationshipLength',
    questionText: 'What is the length of your relationship?',
    options: [
      'Not in a romantic relationship',
      'Less than/equal to 1 year',
      'Between 1 year to 3 years',
      'Between 4 years to 9 years',
      'Between 9 years to 15 years',
      'More than 15 years',
      'Prefer not to identify',
    ],
  },
  {
    tag: 'input',
    type: 'text',
    name: 'relationshipLength',
    questionText: `“To love oneself is the beginning of a lifelong romance” wrote Oscar Wilde.&&This assessment is most helpful when you are in a relationship.&&Come back when you are in one. :)`,
    conditional: 'Not in a romantic relationship',
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'relationshipSatisfaction',
    questionText: `Amazing. Let's get to it.&&We will ask you two general questions about your relationship.&&What is your current level of happiness and satisfaction in your relationship?`,
    options: [
      `Not satisfied at all - I'd like to see a major change`,
      `Somewhat - Ups and downs but I'd like to see some improvement`,
      `I am mostly happy and satisfied but would still benefit from further improvement and excitement`,
      `I am completely satisfied and like to keep it this way`,
    ],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'negativeInteractions',
    questionText: `How often do you experience a "negative interaction" in your relationship?&&We define "negative interaction" as any conflict, argument, problem or issue.`,
    options: [
      'Daily',
      'Many times a week',
      'Once or twice a week',
      'Few times a month',
      'Few times a year',
      'Once a year or less often',
    ],
  },
  {
    tag: 'input',
    type: 'checkbox',
    name: 'problems',
    questionText: `Now, we will briefly explore any problems you might be having in your relationship.&&In the past month, have you experienced an issue in any of the following areas? Select all that apply.`,
    options: problemsOptions
  },
  {
    tag: 'input',
    type: 'checkbox',
    name: 'contributingIssues',
    questionText: `What could be contributing to the issues you experience? Select all that apply.`,
    options: contributingIssuesOptions,
  },
  {
    tag: 'input',
    type: 'checkbox',
    name: 'pastThreeMonths',
    questionText: `Do any of the following apply to you now or in the past 3 months?`,
    options: pastThreeMonthsOptions,
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howEnjoyable',
    questionText: `Ok, let’s talk about the positives.&&When you reflect on the following questions, it is important that you consider only the positive qualities of your relationship and ignore the negative ones.&&How “enjoyable” do you feel your relationship is?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howPleasant',
    questionText: `“My relationship is pleasant.” How true does this statement sound?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howStrong',
    questionText: `“My relationship is strong.” How true does this statement sound?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howAlive',
    questionText: `How “alive” do you feel your relationship is?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howMiserable',
    questionText: `Almost done!&&In this final part, we will also explore the not-so-positive aspects of your relationship.&&When you reflect on the following questions, consider only the negative qualities of your relationship and ignore the positive ones.&&“My relationship is miserable.”  How true does this statement sound?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howBad',
    questionText: `“My relationship is bad.”  How true does this statement sound?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howEmpty',
    questionText: `How “empty” do you feel your relationship is?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
  {
    tag: 'input',
    type: 'radio',
    name: 'howLifeless',
    questionText: `“My relationship is lifeless.”  How true does this statement sound?`,
    options: ['Not at all', 'A tiny bit', 'A little', 'Somewhat', 'Mostly', 'Very extremely'],
  },
];
