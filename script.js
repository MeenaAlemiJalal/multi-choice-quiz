const questions = {
    1: {
        question: 'Commonly used data types DO NOT include:',
        choices: ['1.strings', '2.booleans', '3.alerts', '4.numbers'],
        answer: '3.alerts'
    },
    2: {
        question: 'The condition in an if/else statement is enclosed withing____.',
        choices: ['1.quotes', '2.currly brackets', '3.parenthesis', '4.squarebrakets'],
        answer: '3.parenthesis'
    },
    3: {
        question: 'Arrays in javascript can be used to store_____.',
        choices: ['1.numbers and strings', '2.other arrays', '3.booleans', '4.all of the above'],
        answer: '3.all of the above'
    },
    4:{
        question: 'String values must be inclused within_____ being assigned to variables.',
        choices: ['1.commas', '2.curly brackets', '3.quotes', '4.parenthesis'],
        answer: '3.quotes'
    },
    5:{
        question: 'A very useful tool used during development and debuging for printing content to the debuger is:',
        choices: ['1.javascript', '2.terminal/bash', '3.for loops', '4.console.log'],
        answer: '4.console.log'
    }
}

const startBtn = document.getElementById('start-btn')
const bodyStartContainer = document.getElementById('body-start')
const timer =  document.getElementById('timer')
let currentQuestionNumber = 1
let currentQuestion
let timerSeconds = 75
let score = 0

function startQuiz(){
    // hide the start section by clicking the start quiz button
    bodyStartContainer.style.display = 'none'
    setInterval(function(){
        timerSeconds--
        timer.innerHTML = timerSeconds
    }, 1000)
    //get the current question from the questions object
    getQuestion(currentQuestionNumber)
    
    
    const questionsContainer = document.getElementById('questions')
    renderQuestion(currentQuestion)
    questionsContainer.style.display = 'flex'
} 

function renderQuestion(currentQuestion) {
    const questionTextElement = document.getElementById('question-text')
    const answerBtn1 = document.getElementById('answer-1')
    const answerBtn2 = document.getElementById('answer-2')
    const answerBtn3 = document.getElementById('answer-3')
    const answerBtn4 = document.getElementById('answer-4')
    questionTextElement.innerHTML = currentQuestion.question
    answerBtn1.innerHTML = currentQuestion.choices[0]
    answerBtn2.innerHTML = currentQuestion.choices[1]
    answerBtn3.innerHTML = currentQuestion.choices[2]
    answerBtn4.innerHTML = currentQuestion.choices[3]
    answerBtn1.addEventListener('click', saveAnswer)
    answerBtn2.addEventListener('click', saveAnswer)
    answerBtn3.addEventListener('click', saveAnswer)
    answerBtn4.addEventListener('click', saveAnswer)
}

function saveAnswer(event) {
    const userAnswer = event.target.innerHTML
    currentQuestionNumber++
    console.log(currentQuestionNumber)
   if(currentQuestionNumber <= 5) {
        // check the answer status
        let status = userAnswer === currentQuestion.answer ? 'Correct!' : 'Wrong!'
        // display the answer status 
        const answerStatusContainer = document.getElementById('body-answer-status')
        const answerStatus = document.getElementById('answer-status')
        answerStatusContainer.style.display = 'block'
        answerStatus.innerHTML = status
        if (status === 'Wrong!') {
            timerSeconds = timerSeconds - 10
            timer.innerHTML = timerSeconds
            score = score - 10
        } else {
            score = score + 10
        }
        getQuestion(currentQuestionNumber)
        renderQuestion(currentQuestion)
        
    } else {
       const allDoneContainer = document.getElementById('all-done')
       const highScoreContainer = document.getElementById('final-score')
       const questionsContainer = document.getElementById('questions')
       questionsContainer.style.display = 'none'
       highScoreContainer.innerHTML = `Your final score is ${score}`
       allDoneContainer.style.display = 'flex' 
    }

}


function getQuestion(questionNumber) {
    currentQuestion =  questions[questionNumber]
}


startBtn.addEventListener('click', startQuiz)