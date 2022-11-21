const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// const quiz;
const quizHeader = document.querySelector(".quiz-header")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0

const h1 = document.createElement("h1");
quizHeader.appendChild(h1)

loadQuiz()

function loadQuiz() {
    if (currentQuiz < quizData.length) {
        questionEl.textContent = quizData[currentQuiz].question;
        a_text.textContent = quizData[currentQuiz].a;
        b_text.textContent = quizData[currentQuiz].b;
        c_text.textContent = quizData[currentQuiz].c;
        d_text.textContent = quizData[currentQuiz].d;
    }
}

function deselectAnswers() {
}

function getSelected() {
    answerEls.forEach((e) => {
        let l = document.querySelector(`[for=${e.id}]`)
        if (e.checked) {
            if (quizData[currentQuiz].correct === e.id) {
                score++
                h1.textContent = `Score - ${score}`;
                l.style.color = "#398300";
            } else {
                h1.textContent = `Score - ${score}`;
                l.style.color = "#B4161B";
            }
        }
        setTimeout(() => {
            e.checked = false
            l.style.color = "";
        }, 1000);
    })
    currentQuiz++
}

submitBtn.addEventListener('click', () => {
    getSelected()
    setTimeout(() => {
        loadQuiz();
    }, 1000);
})