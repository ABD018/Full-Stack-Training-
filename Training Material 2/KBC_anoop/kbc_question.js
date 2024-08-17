let questionsWithOptions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Harry Potter' series?",
    options: [
      "J.K. Rowling",
      "Stephen King",
      "George R.R. Martin",
      "Jane Austen",
    ],
    answer: "J.K. Rowling",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
    answer: "Mitochondria",
  },
  {
    question: "What year did the Titanic sink?",
    options: ["1909", "1911", "1912", "1914"],
    answer: "1912",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "Which chemical element has the symbol 'Fe'?",
    options: ["Iron", "Gold", "Silver", "Copper"],
    answer: "Iron",
  },
  {
    question: "Who is credited with the theory of relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "What is the world's largest river?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Amazon River",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
    answer: "Vatican City",
  },
  {
    question: "Who was the first person to step on the Moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: "Neil Armstrong",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "George Orwell",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    answer: "H2O",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    question: "What is the capital of Mongolia?",
    options: ["Ulaanbaatar", "Astana", "Kathmandu", "Dushanbe"],
    answer: "Ulaanbaatar",
  },
  {
    question: "Who discovered the first antibiotic substance?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Robert Koch",
      "Joseph Lister",
    ],
    answer: "Alexander Fleming",
  },
  {
    question: "Which species of whale is the largest living animal?",
    options: ["Blue Whale", "Sperm Whale", "Humpback Whale", "Orca"],
    answer: "Blue Whale",
  },
  {
    question: "In which year did World War I begin?",
    options: ["1914", "1916", "1918", "1920"],
    answer: "1914",
  },
  {
    question: "Who painted the famous 'Guernica'?",
    options: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Vincent van Gogh",
      "Claude Monet",
    ],
    answer: "Pablo Picasso",
  },
  {
    question:
      "What is the name of the spacecraft that carried the first humans to land on the Moon?",
    options: ["Apollo 11", "Gemini 6", "Soyuz 1", "Vostok 1"],
    answer: "Apollo 11",
  },
  {
    question: "Which planet has the most moons in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Who developed the theory of continental drift?",
    options: [
      "Alfred Wegener",
      "Charles Darwin",
      "James Hutton",
      "Thomas Huxley",
    ],
    answer: "Alfred Wegener",
  },
  {
    question: "Which chemical element has the atomic number 92?",
    options: ["Uranium", "Plutonium", "Neptunium", "Americium"],
    answer: "Uranium",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Rosalind Franklin",
      "Dorothy Hodgkin",
      "Gerty Cori",
    ],
    answer: "Marie Curie",
  },
  {
    question:
      "Which mountain range is home to the tallest peak outside of Asia?",
    options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
    answer: "Andes",
  },
  {
    question:
      "Which scientist formulated the laws of motion and universal gravitation?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Johannes Kepler",
    ],
    answer: "Isaac Newton",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Antarctica", "Sahara", "Arabian Desert", "Gobi Desert"],
    answer: "Antarctica",
  },
  {
    question: "Which city is known as the 'Venice of the North'?",
    options: ["Stockholm", "Amsterdam", "St. Petersburg", "Bruges"],
    answer: "St. Petersburg",
  },
  {
    question:
      "Which disease is characterized by the inability of the body to produce or respond to insulin?",
    options: ["Diabetes", "Tuberculosis", "Hypertension", "Malaria"],
    answer: "Diabetes",
  },
  {
    question: "Who is considered the 'Father of Modern Chemistry'?",
    options: [
      "Antoine Lavoisier",
      "Dmitri Mendeleev",
      "John Dalton",
      "Robert Boyle",
    ],
    answer: "Antoine Lavoisier",
  },
  {
    question:
      "In which country was the game of chess believed to have originated?",
    options: ["India", "China", "Persia", "Greece"],
    answer: "India",
  },
  {
    question:
      "Which gas makes up the largest percentage of Earth's atmosphere by volume?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    answer: "Nitrogen",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Robert Koch",
      "Joseph Lister",
    ],
    answer: "Alexander Fleming",
  },
  {
    question: "Which novel begins with the line 'Call me Ishmael'?",
    options: [
      "Moby-Dick",
      "1984",
      "Pride and Prejudice",
      "The Catcher in the Rye",
    ],
    answer: "Moby-Dick",
  },
];

let prize = [
  "1,000",
  "2,000",
  "3,000",
  "5,000",
  "10,000",
  "20,000",
  "40,000",
  "80,000",
  "1,60,000",
  "3,20,000",
  "6,50,000",
  "12,00,000",
  "25,00,000",
  "50,00,000",
  "1,00,00,000",
];

let questionCounter = 0;
document.getElementById(
  "question_prize"
).innerText = `Question Prize: ${prize[questionCounter]}`;
let first_option = document.getElementById("first_option");
let second_option = document.getElementById("second_option");
let third_option = document.getElementById("third_option");
let fourth_option = document.getElementById("fourth_option");
let score_text_h1 = document.getElementById("score_text_h1");
let score_text_p = document.getElementById("score_text_p");
let rupee = "\u{20B9}";
let time = 30;
let questionArr = [];
let optionArr = [];
let prizeMenu = document.getElementById("prize-menu");

function checkquestionNumber() {
  let i = 0;
  while (i < 15) {
    rand = Math.floor(Math.random() * 30);
    if (questionArr.includes(rand)) {
      continue;
    } else {
      questionArr.push(rand);
      i++;
    }
  }
}

checkquestionNumber();
console.log(questionArr);

prizeMenu.addEventListener("click", function () {
  if (document.getElementById("prize-list").style.display == "none") {
    document.getElementById("prize-list").style.display = `block`;
  } else {
    document.getElementById("prize-list").style.display = "none";
  }
});

function checkAnswer(num, id) {
  if (
    num ==
    questionsWithOptions[questionArr[questionCounter]].options.indexOf(
      questionsWithOptions[questionArr[questionCounter]].answer
    )
  ) {
    document.getElementById(id).style.background = "rgba( 80, 200, 120 , 0.7)";
    questionCounter++;
    questionClrinterval = setInterval(nextQuestion, 1000);
  } else {
    document.getElementById(id).style.background = "rgba(202, 52, 51 , 0.7)";
    popupinterval = setInterval(showpopup, 1000);
  }
}

function nextQuestion() {
  first_option.style.background = "";
  second_option.style.background = "";
  third_option.style.background = "";
  fourth_option.style.background = "";

  if (questionCounter == 15) {
    document.getElementById("display_score_card").style.display = `block`;
    score_text_h1.innerText = `You Win`;
    score_text_p.innerText = `${rupee} 1,00,00,000`;
  }
  changePrizeMenu();
  document.getElementById(
    "question_prize"
  ).innerText = `Question Prize: ${prize[questionCounter]}`;
  document.getElementById("display_question").innerText = `Q${
    questionCounter + 1
  } ${questionsWithOptions[questionArr[questionCounter]].question}`;
  first_option.innerText = `(A) ${
    questionsWithOptions[questionArr[questionCounter]].options[0]
  }`;
  second_option.innerText = `(B) ${
    questionsWithOptions[questionArr[questionCounter]].options[1]
  }`;
  third_option.innerText = `(C) ${
    questionsWithOptions[questionArr[questionCounter]].options[2]
  }`;
  fourth_option.innerText = `(D) ${
    questionsWithOptions[questionArr[questionCounter]].options[3]
  }`;
  clearInterval(questionClrinterval);
  clearInterval(clrtime);
  if (questionCounter < 5) setTime(20);
  else if (questionCounter < 10) setTime(40);
  else if (questionCounter >= 10)
    document.getElementById("display_timer").style.display = `none`;
}

function showpopup() {
  document.getElementById("display_score_card").style.display = `block`;
  if (questionCounter < 5) {
    score_text_p.innerText = `${rupee} 0`;
  }
  if (questionCounter + 1 > 5) {
    score_text_p.innerText = `${rupee} 10,000`;
  } else if (questionCounter + 1 > 10) {
    score_text_p.innerText = `${rupee} 3,20,000`;
  }
  clearInterval(popupinterval);
}

function changePrizeMenu() {
  const liList = document.querySelectorAll("ul li");
  const lastIndex = liList.length - 1;

  for (let i = 0; i < liList.length; i++) {
    let reversedIndex = lastIndex - i;

    if (questionCounter === i) {
      liList[reversedIndex].style.backgroundColor = "rgba(252, 232, 131, 0.7)";
    } else {
      liList[reversedIndex].style.backgroundColor = "";
    }
  }
}

function setTime(num) {
  let leftTime = num;
  clrtime = setInterval(() => {
    document.getElementById("timer").innerText = leftTime;
    leftTime--;
    if (leftTime < 0) {
      clearInterval(clrtime);
      clrgameOver = setInterval(gameOver, 1000);
    }
  }, 1000);
}

function gameOver() {
  document.getElementById("display_score_card").style.display = `block`;
  score_text_h1.innerText = `OOP's Time Out`;
  if (questionCounter < 5) {
    score_text_p.innerText = `${rupee} 0`;
  }
  if (questionCounter + 1 > 5) {
    score_text_p.innerText = `${rupee} 10,000`;
  } else if (questionCounter + 1 > 10) {
    score_text_p.innerText = `${rupee} 3,20,000`;
  }
  clearInterval(clrgameOver);
}

function displayLifeLine() {
  document.getElementById("life-line-surity").style.display = `block`;
}
function onclickYes() {
  if (lifeLineIndex == 0) {
    OnclickLifeLine().fiftyFifty();
    displayCrossLine();
  } else if (lifeLineIndex == 1) OnclickLifeLine().phoneOfriend();
  else if (lifeLine == 2) OnclickLifeLine().replaceQuestion();
  document.getElementById("life-line-surity").style.display = `none`;
}
function onclickNo() {
  document.getElementById("life-line-surity").style.display = `none`;
}

function OnclickLifeLine(lifeLine) {
  lifeLineIndex = lifeLine;
  displayLifeLine();
  return {
    fiftyFifty: function () {
      let i = 0;
      let correctOption = questionsWithOptions[
        questionArr[questionCounter]
      ].options.indexOf(
        questionsWithOptions[questionArr[questionCounter]].answer
      );
      while (i < 2) {
        let randOption = Math.floor(Math.random() * 4);
        if (optionArr.includes(randOption)) {
          continue;
        } else if (correctOption == randOption) {
          continue;
        } else {
          optionArr.push(randOption);
          i++;
        }
      }
      for (let i = 0; i < 2; i++) {
        if (optionArr[i] == 0) {
          first_option.innerText = `NULL`;
        } else if (optionArr[i] == 1) {
          second_option.innerText = `NULL`;
        } else if (optionArr[i] == 2) {
          third_option.innerText = `NULL`;
        } else if (optionArr[i] == 3) {
          fourth_option.innerText = `NULL`;
        }
      }
    },
    phoneOfriend: {},
    replaceQuestion: {},
  };
}

function displayCrossLine() {
  document.getElementById("cross-line").style.display = `block`;
}

function quite(){
    document.getElementById("displayQuite").style.display = `block`
    document.getElementById("quitePrize").innerText = `If you quite, prize you get: ${rupee} ${prize[questionCounter]}`
}
function quiteYes(){
    window.open("KBC.html","_self");
}
function quiteNo(){
    document.getElementById("displayQuite").style.display = `none`;

}

setTime(20);
nextQuestion();
