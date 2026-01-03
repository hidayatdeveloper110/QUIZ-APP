
const quiz = [
    {
        question: "HTML ka full form kya hai?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "CSS kis ke liye use hoti hai?",
        options: [
            "Structure",
            "Styling",
            "Programming",
            "Database"
        ],
        answer: 1
    },
    {
        question: "JavaScript kis type ki language hai?",
        options: [
            "Markup",
            "Styling",
            "Programming",
            "Database"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const buttons = document.querySelectorAll(".btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    questionEl.textContent = quiz[currentQuestion].question;
    buttons.forEach((btn, index) => {
        btn.textContent = quiz[currentQuestion].options[index];
    });
}

function checkAnswer(selected) {
    if (selected === quiz[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        document.getElementById("options").style.display = "none";
        scoreEl.textContent = "Final Score: " + score;
    }

    scoreEl.textContent = "Score: " + score;
}

loadQuestion();

