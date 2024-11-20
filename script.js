
const questions = [
    {
        question: "Chi ha introdotto il termine 'estetica' come disciplina autonoma?",
        options: ["Immanuel Kant", "Alexander Baumgarten", "Friedrich Nietzsche", "Georg Wilhelm Friedrich Hegel"],
        correct: 1,
        explanation: "Alexander Baumgarten è considerato il fondatore dell'estetica come disciplina autonoma."
    },
    {
        question: "Cosa significa 'aisthētikós' in greco?",
        options: ["Sensazione", "Giudizio", "Percezione", "Estetica"],
        correct: 0,
        explanation: "La parola 'aisthētikós' si riferisce a ciò che concerne la sensazione."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(index));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.correct) {
        score++;
        alert("Corretto! " + currentQuestion.explanation);
    } else {
        alert("Sbagliato. " + currentQuestion.explanation);
    }
    nextButton.style.display = "block";
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = `Hai ottenuto ${score} su ${questions.length} punti!`;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
});

document.getElementById("restart-btn").addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
});

showQuestion();
