const quizData = [
    {
        question: "In which year was the first true Pierce Car made?",
        a: "1905",
        b: "1956",
        c: "1895",
        d: "1901",
        correct: "d",
    },
    {
        question: "Year of manufacture of an automobile is referred to as what?",
        a: "Series",
        b: "Model",
        c: "VIN Chassis Number",
        d: "Registration Date",
        correct: "b",
    },
    {
        question: " What is the expansion of NVH, an abbreviation commonly used in automobile dealings?",
        a: "Noise, Vibration and Harshness",
        b: "Nene Valley Harriers",
        c: "Nicholas Van Hoogstraten",
        d: "Noise, Vibration, and Harmonics",
        correct: "a",
    },
    {
        question: "What is the full form of ABS, a safety technology used in cars and bikes?",
        a: "All lock Braking System",
        b: "Anti-lock Braking System",
        c: "Anti Braking System",
        d: "Anti-lock Braking Solution",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});