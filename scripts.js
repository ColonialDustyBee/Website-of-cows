const quizForm = document.getElementById('quiz-form');
const resultsContainer = document.getElementById('results');
const correctAnswersList = ['d', 'a', 'a'];
function gradeQuiz(event){
    event.preventDefault();
    let score = 0;
    const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value];

userAnswers.forEach((answers, index) => {
    if(answers === correctAnswersList[index]){
        score += 1;
    } 
});
 resultsContainer.innerHTML = 'You scored ' + score + ' out of ' + correctAnswersList.length  + ' correct!'
}
quizForm.addEventListener('submit', gradeQuiz);
quizForm.addEventListener('submit', showQuestion);
const questionContainer = document.getElementById('question-container');
let correctAnswer = 'Yes';
function showQuestion() {
  const question = 'One more question, are highland cattle the cutest?!';
  const options = ['Yes', 'No'];

  const questionElement = document.createElement('h3');
  questionElement.textContent = question;
  
  const optionElements = options.map(option => { // Loads button and basic input text into the page when a button is pressed
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = option;
    label.textContent = option;
    label.appendChild(radio);
    return label;
  });

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', handleSubmit);


  questionContainer.appendChild(questionElement);
  optionElements.forEach(element => {
    questionContainer.appendChild(element);
  });
  questionContainer.appendChild(submitButton);
}
const answer = document.getElementById('True/False');
function handleSubmit() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const userAnswer = selectedAnswer.value;
    if (userAnswer === correctAnswer) {
        answer.innerHTML = "You are indeed correct! They are the cutest!";
    } 
    else {
        answer.innerHTML = "Incorrect! the correct answer should be that they are the cutest!";
    }
}

