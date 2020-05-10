const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionCounterText = document.getElementById('questionCounter')
const scoreText = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex
let currentQuestion = {};
let questionCounter = 0;
let score = 0;
let availableQuestions = [];
let acceptAnswer = false;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionCounter = 0;
    score = 0;

    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
questionCounter++;
questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS;


}
function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
}
    
    )
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
 

if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
}else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const classToApply = selectAnswer == currentQuestion.answer ? "correct" : "incorrect";
if (classToApply === 'correct') {
    incrementScore(CORRECT_BONUS);
}

incrementScore = num => {
    scoreText = CORRECT_BONUS;
    scoreText.innerText = score;
}


const questions = [
{
    question: 'What is coding?',
    answers: [
        {text: 'programming', correct: true},
        {text: 'configuration', correct: false},
        {text: 'writing', correct: false},
        {text: 'computer', correct: false}
    ]
},
{
    question: 'What is the full meaning of COVID-19?',
    answers: [
        {text: 'Fever', correct: false},
        {text: 'HIV', correct: false},
        {text: 'Coronavirus', correct: true},
        {text: 'Cough', correct: false}
    ]
},
{
    question: 'A Script file must end with what extension ?',
    answers: [
        {text: '.js', correct: true},
        {text: '.html', correct: false},
        {text: '.css', correct: false},
        {text: '.py', correct: false}
    ]
},
{
    question: 'Select the type of programming language from the list',
    answers: [
        {text: 'Ludo', correct: false},
        {text: 'Town', correct: false},
        {text: 'Pycharm', correct: false},
        {text: 'Java', correct: true}
    ]
},
{
    question: 'Frontend developer consist of ?',
    answers: [
        {text: 'css', correct: false},
        {text: 'css, html, javascript coding', correct: true},
        {text: 'javascript', correct: false},
        {text: 'coding', correct: false}
    ]
}

]