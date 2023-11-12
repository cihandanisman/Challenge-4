let currentQuestionIndex = 0;
let time = 60;
let timer;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.querySelector('button');
const timerElement = document.getElementById('time');

var questions = [
    {
      question: 'Commonly used data types do not include:',
      options: ['strings', 'booleans', 'alerts', 'numbers'],
      correctAnswer: 'alerts'
    },
    {
      question: 'The condition in an if/else statement is enclosed within ____',
      options: ['quotes', 'square brackets', 'curlt brackets', 'parentheses'],
      correctAnswer: 'parentheses'
    },
    {
      question: 'Arrays in JavaScript can be used to store ____',
      options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      correctAnswer: 'all of the above'
    },
    {
      question: 'String values must be anclosed within _____ when being assigned to variables',
      options: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      correctAnswer: 'quotes'
    },
    {
      question: 'A very useful toll use during development and debugging for printing content to the debugger is :?',
      options: ['JavaScript', 'terminal', 'console.log', 'for loops'],
      correctAnswer: 'console.log'
    }
];

function startQuiz() {
  nextButton.disabled = false;
  timer = setInterval(updateTimer, 1000);
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
  }

  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.disabled = true;
  } else {
    clearInterval(timer);
    questionContainer.innerText = 'Quiz Completed!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
  }
}

function updateTimer() {
  if (time > 0) {
    time--;
    timerElement.innerText = time + ' seconds';
  } else {
    clearInterval(timer);
    questionContainer.innerText = 'Time is up!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
  }
}

window.onload = startQuiz;
