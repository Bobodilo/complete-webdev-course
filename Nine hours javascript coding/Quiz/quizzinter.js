//Create an array of objects (questions and answers) 

const quizData = [
    {
        question: "How old is Balek's",
        a: "10",
        b: "20",
        c: "24",
        d: "120",
        correct: "c"
    },

    {
        question: "What's the most popular programming language in 2019?",
        a: "Java",
        b: "Python",
        c: "Javascript",
        d: "Solidity",
        correct: "c"

    },

    {
        question: "Who was the first president of Congo?",
        a: "Mampouya",
        b: "Sassou",
        c: "Balekoua-Madzo",
        d: "Youlou",
        correct: "d"
    },

    {
        question: "What do women want?",
        a: "Sex",
        b: "Babies",
        c: "Security",
        d: "Balek's",
        correct: "d"
    }
];

//control the data
 const answerEls = document.querySelectorAll("answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");



// Keep track of the current question (with a variable set initially at 0)

let currentQuiz = 0;

//function to load questions

loadQuiz();

function loadQuiz () {
    //call deselect
    deselectAnswers();
    //Dispalying the text in the browser
    const currentQuizData = quizData [currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Slecting the button (answers)
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        } 
    });

    return answer;
}

//Deselect answers once clicked

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        } 
    );

}

// Onclick load next question

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;
if (currentQuiz < quizData.length) {
  loadQuiz();  
} else {
    // TODO : Show Result
    alert("You've finished! Get yourself a drink")
}
    
});

