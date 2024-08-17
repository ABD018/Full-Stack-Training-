let lifelinePhone = false;
let timerPaused = false;
const allQuestions = [
  {
    question: "Where is ICC's Headquarters Located?",
    options: ["Dubai", "Delhi", "Lahore", "Dhaka"],
    correctAnswer: 0,
  },
  {
    question: "Which country won the first Cricket World Cup in 1975?",
    options: ["Australia", "India", "West Indies", "England"],
    correctAnswer: 2,
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: [
      "Brian Lara",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Viv Richards",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which bowler has the most wickets in Test cricket?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "James Anderson",
      "Anil Kumble",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which cricketer holds the record for the fastest century in ODIs?",
    options: [
      "AB de Villiers",
      "Corey Anderson",
      "Shahid Afridi",
      "Virat Kohli",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which country is the origin of the game cricket?",
    options: ["Australia", "India", "South Africa", "England"],
    correctAnswer: 3,
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 1,
  },
  {
    question: "Which cricket ground is known as the 'Mecca of Cricket'?",
    options: [
      "Eden Gardens",
      "Melbourne Cricket Ground",
      "Lords",
      "Wankhede Stadium",
    ],
    correctAnswer: 2,
  },
  {
    question: "Who was the first batsman to score 10,000 runs in Test cricket?",
    options: [
      "Sunil Gavaskar",
      "Don Bradman",
      "Sachin Tendulkar",
      "Brian Lara",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which team won the 2019 Cricket World Cup?",
    options: ["India", "New Zealand", "Australia", "England"],
    correctAnswer: 3,
  },
  {
    question: "Who is the only player to score 100 international centuries?",
    options: [
      "Ricky Ponting",
      "Virat Kohli",
      "Sachin Tendulkar",
      "Kumar Sangakkara",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the length of the pitch in cricket?",
    options: ["20 yards", "22 yards", "24 yards", "26 yards"],
    correctAnswer: 1,
  },
  {
    question: "Which country has won the most T20 World Cups?",
    options: ["India", "West Indies", "Australia", "England"],
    correctAnswer: 1,
  },
  {
    question: "Who was the first captain to win all ICC trophies?",
    options: ["MS Dhoni", "Ricky Ponting", "Eoin Morgan", "Kane Williamson"],
    correctAnswer: 0,
  },
  {
    question:
      "Who holds the record for the highest individual score in a single ODI match?",
    options: [
      "Chris Gayle",
      "Rohit Sharma",
      "Martin Guptill",
      "AB de Villiers",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: [
      "Brian Lara",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Viv Richards",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which bowler has the most wickets in Test cricket?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "James Anderson",
      "Anil Kumble",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which cricketer holds the record for the fastest century in ODIs?",
    options: [
      "AB de Villiers",
      "Corey Anderson",
      "Shahid Afridi",
      "Virat Kohli",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which country is the origin of the game cricket?",
    options: ["Australia", "India", "South Africa", "England"],
    correctAnswer: 3,
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 1,
  },
  {
    question: "Which cricket ground is known as the 'Mecca of Cricket'?",
    options: [
      "Eden Gardens",
      "Melbourne Cricket Ground",
      "Lords",
      "Wankhede Stadium",
    ],
    correctAnswer: 2,
  },
  {
    question: "Who was the first batsman to score 10,000 runs in Test cricket?",
    options: [
      "Sunil Gavaskar",
      "Don Bradman",
      "Sachin Tendulkar",
      "Brian Lara",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which team won the 2019 Cricket World Cup?",
    options: ["India", "New Zealand", "Australia", "England"],
    correctAnswer: 3,
  },
  {
    question: "Who is the only player to score 100 international centuries?",
    options: [
      "Ricky Ponting",
      "Virat Kohli",
      "Sachin Tendulkar",
      "Kumar Sangakkara",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the length of the pitch in cricket?",
    options: ["20 yards", "22 yards", "24 yards", "26 yards"],
    correctAnswer: 1,
  },
  {
    question: "Which country has won the most T20 World Cups?",
    options: ["India", "West Indies", "Australia", "England"],
    correctAnswer: 1,
  },
  {
    question: "Who was the first captain to win all ICC trophies?",
    options: ["MS Dhoni", "Ricky Ponting", "Eoin Morgan", "Kane Williamson"],
    correctAnswer: 0,
  },
  {
    question:
      "Who holds the record for the highest individual score in a single ODI match?",
    options: [
      "Chris Gayle",
      "Rohit Sharma",
      "Martin Guptill",
      "AB de Villiers",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which Indian cricketer is known as 'The Wall'?",
    options: ["Sourav Ganguly", "Rahul Dravid", "Virat Kohli", "VVS Laxman"],
    correctAnswer: 1,
  },
  {
    question:
      "Which country did England defeat to win the 2019 Cricket World Cup?",
    options: ["India", "New Zealand", "Australia", "West Indies"],
    correctAnswer: 1,
  },
  {
    question: "Who has the highest individual score in Test cricket?",
    options: [
      "Brian Lara",
      "Sachin Tendulkar",
      "Virender Sehwag",
      "Don Bradman",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which cricketer is known for the 'Helicopter Shot'?",
    options: ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Yuvraj Singh"],
    correctAnswer: 1,
  },
  {
    question: "Which team won the first T20 World Cup in 2007?",
    options: ["India", "Pakistan", "Australia", "England"],
    correctAnswer: 0,
  },
  {
    question: "Who has the record for the fastest 50 in T20 internationals?",
    options: ["Chris Gayle", "Yuvraj Singh", "David Warner", "Kieron Pollard"],
    correctAnswer: 1,
  },
  {
    question: "Which player has the most runs in ODI cricket?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Brian Lara"],
    correctAnswer: 2,
  },
  {
    question: "Who has the most stumpings in international cricket?",
    options: ["Adam Gilchrist", "Kumar Sangakkara", "MS Dhoni", "Mark Boucher"],
    correctAnswer: 2,
  },
  {
    question: "Which bowler has the best bowling figures in an ODI match?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "Chaminda Vaas",
      "Glenn McGrath",
    ],
    correctAnswer: 2,
  },
  {
    question: "Who has the most sixes in ODI cricket?",
    options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Sanath Jayasuriya"],
    correctAnswer: 1,
  },
  {
    question: "Which cricketer is known as 'Mr. 360'?",
    options: ["AB de Villiers", "Virat Kohli", "Steve Smith", "Joe Root"],
    correctAnswer: 0,
  },
  {
    question: "Which team has won the most Cricket World Cups?",
    options: ["India", "Australia", "West Indies", "England"],
    correctAnswer: 1,
  },
  {
    question:
      "Who is the youngest player to score a century in international cricket?",
    options: [
      "Shahid Afridi",
      "Sachin Tendulkar",
      "Virat Kohli",
      "Prithvi Shaw",
    ],
    correctAnswer: 0,
  },
  {
    question: "Who has the highest individual score in T20 internationals?",
    options: ["Brendon McCullum", "Chris Gayle", "Aaron Finch", "David Warner"],
    correctAnswer: 2,
  },
  {
    question: "Which cricketer is known for the 'Dil-scoop' shot?",
    options: [
      "Tillakaratne Dilshan",
      "MS Dhoni",
      "Kumar Sangakkara",
      "Yuvraj Singh",
    ],
    correctAnswer: 0,
  },
  {
    question: "Who has the most double centuries in Test cricket?",
    options: [
      "Don Bradman",
      "Kumar Sangakkara",
      "Brian Lara",
      "Sachin Tendulkar",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which team won the 2021 ICC T20 World Cup?",
    options: ["Australia", "India", "Pakistan", "England"],
    correctAnswer: 0,
  },
  {
    question: "Who has the best economy rate in T20 internationals?",
    options: [
      "Sunil Narine",
      "Rashid Khan",
      "Mujeeb Ur Rahman",
      "Glenn McGrath",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who has the most fifties in T20 internationals?",
    options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "David Warner"],
    correctAnswer: 0,
  },
  {
    question: "Who has the most centuries in ODI cricket?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Sanath Jayasuriya",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which cricketer is known for scoring 6 sixes in an over in T20 World Cup?",
    options: ["Chris Gayle", "Kieron Pollard", "Yuvraj Singh", "Andre Russell"],
    correctAnswer: 2,
  },
];

const prizes = [
  1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 650000,
  1200000, 2500000, 5000000, 10000000,
];

const timers = [
  30,
  30,
  30,
  30,
  30,
  40,
  40,
  40,
  40,
  40,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
];

let currentQuestionIndex = 0;
let timerInterval;
let timeLeft;
let questions = [];

function initializeGame() {
  questions = getRandomQuestions();
  loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
  const question = questions[index];

  if (index < questions.length) {
    document.getElementById("question-number").innerText = `Question ${
      index + 1
    }`;
    document.getElementById("question-text").innerText = question.question;

    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].innerText = question.options[i];
      options[i].classList.remove("disabled");
    }
    document.getElementById("Prizee").innerText = prizes[index] + " Rs";

    startTimer(timers[index]);
  } else {
    endGame();
  }
}

function getRandomQuestions() {
  let shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
}

function startTimer(seconds) {
  const prizeListItems = document.querySelectorAll("#priceList li");
  prizeListItems.forEach((li) => {
    li.classList.remove("current-question");
  });

  const adjustedIndex = 14 - currentQuestionIndex;
  prizeListItems[adjustedIndex].classList.add("current-question");
  clearInterval(timerInterval);
  timeLeft = seconds;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft === 0) {
      clearInterval(timerInterval);

      endGame(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("time-left");

  if (timeLeft === Infinity) {
    timerDisplay.innerHTML = '<i class="fa-solid fa-infinity"></i>';
  } else {
    const seconds = timeLeft % 60;
    timerDisplay.innerText = seconds < 10 ? `0${seconds}` : seconds;
  }
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  const options = document.getElementsByClassName("option");

  clearInterval(timerInterval);

  for (let i = 0; i < options.length; i++) {
    options[i].setAttribute("disabled", true);
  }

  if (selectedOption === question.correctAnswer) {
    options[selectedOption].classList.add("correct-option");
  } else {
    options[selectedOption].classList.add("incorrect-option");
  }

  setTimeout(() => {
    for (let i = 0; i < options.length; i++) {
      options[i].removeAttribute("disabled");
      options[i].classList.remove("correct-option", "incorrect-option");
    }

    if (selectedOption === question.correctAnswer) {
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        endGame();
      } else {
        loadQuestion(currentQuestionIndex);
      }
    } else {
      endGame(false, selectedOption);
    }
  }, 1000);
}

function endGame(isTimeout = false, selectedOption = null) {
  let finalPrize = 0;

  if (isTimeout) {
    if (currentQuestionIndex < 4) {
      finalPrize = 0;
    } else if (currentQuestionIndex < 9) {
      finalPrize = 10000;
    } else if (currentQuestionIndex < 14) {
      finalPrize = 320000;
    }
    showEndGameModal(
      `Oops! Time's Up! The correct answer is ${
        questions[currentQuestionIndex].options[
          questions[currentQuestionIndex].correctAnswer
        ]
      }`,
      finalPrize
    );
  } else if (currentQuestionIndex === questions.length) {
    finalPrize = prizes[prizes.length - 1];
    showEndGameModal("Congratulations! You've won the game.", finalPrize);
  } else {
    showEndGameModal(
      `Oops! Incorrect answer. The correct answer is ${
        questions[currentQuestionIndex].options[
          questions[currentQuestionIndex].correctAnswer
        ]
      }`
    );
  }
}

function showEndGameModal(message, finalPrize = 0) {
  const question = questions[currentQuestionIndex];
  const modal = document.getElementById("myModal");
  const modalMessage = document.getElementById("modal-message");
  const finalScoreText = document.getElementById("final-score");
  finalScoreText.textContent = `Your final Prize Money is: ${finalPrize} Rs`;

  if (currentQuestionIndex < questions.length) {
    modalMessage.textContent = message;
  } else {
    modalMessage.textContent = message;
  }

  modal.style.display = "block";

  const okButton = document.getElementById("okButton");
  okButton.onclick = function () {
    modal.style.display = "none";
    clearInterval(timerInterval);
    window.open("index.html", "_self");
  };
}

let lifelineUsed = false;

function use5050Lifeline() {
  if (lifelineUsed) {
    return;
  }

  const question = questions[currentQuestionIndex];
  const options = document.getElementsByClassName("option");

  let incorrectOptions = [];

  for (let i = 0; i < options.length; i++) {
    if (i !== question.correctAnswer) {
      incorrectOptions.push(i);
    }
  }

  let randomIndexes = getRandomIndexes(incorrectOptions.length, 2);

  for (let i = 0; i < randomIndexes.length; i++) {
    options[incorrectOptions[randomIndexes[i]]].classList.add("disabled");
  }
  lifelineUsed = true;
  disable5050LifelineButton();
}

function getRandomIndexes(max, count) {
  let indexes = [];
  while (indexes.length < count) {
    let randomIndex = Math.floor(Math.random() * max);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

initializeGame();

function quite() {
  const modal = document.getElementById("quitModal");
  modal.style.display = "block";

  const prizeSpan = document.getElementById("quite-prize");
  prizeSpan.innerText = `${prizes[currentQuestionIndex]}RS`;
}

function yes() {
  window.open("index.html", "_self");
}

function no() {
  const modal = document.getElementById("quitModal");
  modal.style.display = "none";
}

function showBar() {
  var div = document.getElementsByClassName("price-bar")[0];

  var style = window.getComputedStyle(div);
  var display = style.getPropertyValue("display");

  if (display === "none" || display === "") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

let pauseTimeout;

function initiateCall() {
  if (lifelinePhone) {
    return;
  }

  lifelinePhone = true;
  disableLifelineButton();
  clearInterval(timerInterval);
  timerPaused = true;

  pauseTimeout = setTimeout(() => {
    startTimer(timeLeft);
    timerPaused = false;
  }, 20000);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1/call/index.php", true);
  xhr.onload = function () {
    if (lifelinePhone) {
      return;
    }
    if (xhr.status === 200) {
      console.log("Response from server: " + xhr.responseText);
      clearTimeout(pauseTimeout);
      if (timerPaused) {
        startTimer(timeLeft);
        timerPaused = false;
      }
    } else {
      console.error("Error initiating call: " + xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Network error occurred");
  };
  xhr.send();
}

function disableLifelineButton() {
  const lifelineButton = document.querySelector(".lifeline-phone");
  lifelineButton.disabled = true;
  lifelineButton.classList.add("used");
}

function disable5050LifelineButton() {
  const lifelineButton = document.querySelector(".lifeline-5050");
  lifelineButton.disabled = true;
  lifelineButton.classList.add("used");
}
