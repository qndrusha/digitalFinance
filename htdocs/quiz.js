const quizData = [
  {
    question: "Можно ли размещать следующую информацию:",
    a: "номер карты",
    b: "CVV- код",
    c: "фотографии карты с двух сторон",
    d: "нельзя размещать все выше перечисленное",
    correct: "d",
  },
  {
    question: "Государственная пошлина обязательна к уплате...",
    a: "в отдельных регионах",
    b: "на всей территории РФ",
    c: "в Москве",
    d: "в Московской области",
    correct: "b",
  },
  {
    question: "К Федеральным налогам и сборам РФ относят:",
    a: "налог на прибыль",
    b: "налог на доходы от капитала",
    c: "налог на доходы физических лиц",
    d: "все вышеперечисленное",
    correct: "d",
  },
  {
    question:
      "Определите сумму НДС к уплате в бюджетную систему, если цена товара с НДС 51000 руб. Ставка налога 20%.",
    a: "10200 рублей",
    b: "8500 рублей",
    c: "11000 рублей",
    d: "40800 рублей",
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

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
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
                <h2>Вы ответили ${score}/${quizData.length} </h2>
                <button onclick="window.location.href = 'success.html' ">Завершить</button>
            `;
    }
  }
});
