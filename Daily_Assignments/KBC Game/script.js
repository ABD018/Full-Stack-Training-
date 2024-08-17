let questions = [
    { question: "Which of the following algorithms is used for finding the shortest path in a weighted graph?", choices: ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "Prim's Algorithm"], correctAnswer: 2 },
    { question: "In a relational database, what does the term 'normalization' refer to?", choices: ["Ensuring data accuracy", "Structuring a database to reduce redundancy", "Backing up data", "Optimizing query performance"], correctAnswer: 2 },
    { question: "What is the time complexity of the QuickSort algorithm in the average case?", choices: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"], correctAnswer: 1 },
    { question: "Which design pattern is used to restrict the instantiation of a class to one 'single' instance?", choices: ["Factory", "Observer", "Singleton", "Decorator"], correctAnswer: 2 },
    { question: "In the context of computer networks, what does the term 'subnetting' mean?", choices: ["Combining multiple networks into one", "Dividing a network into smaller networks", "Encrypting network data", "Optimizing network performance"], correctAnswer: 1 },
    { question: "What is the primary function of the 'garbage collector' in a programming language?", choices: ["To manage memory allocation", "To execute code", "To handle exceptions", "To manage I/O operations"], correctAnswer: 0 },
    { question: "In object-oriented programming, what is 'polymorphism'?", choices: ["The ability of different classes to be treated as instances of the same class through inheritance", "The ability to hide internal details", "The ability to inherit methods from another class", "The ability to encapsulate data"], correctAnswer: 0 },
    { question: "What is the main difference between a 'process' and a 'thread'?", choices: ["A process is a single task, while a thread is a collection of processes", "A thread is a lightweight process that shares resources with other threads", "A process is a small part of a thread", "A thread runs independently, while processes do not"], correctAnswer: 1 },
    { question: "What is the main purpose of the 'CAP Theorem' in distributed systems?", choices: ["To define the types of consistency models", "To explain the trade-offs between consistency, availability, and partition tolerance", "To improve network performance", "To manage data replication"], correctAnswer: 1 },
    { question: "Which of the following is a characteristic of functional programming languages?", choices: ["They use loops and conditional statements", "They treat functions as first-class citizens", "They focus on mutable state", "They do not support recursion"], correctAnswer: 1 },
    { question: "What is the primary use of the 'OAuth' protocol?", choices: ["To encrypt data", "To authenticate users and authorize access", "To optimize database queries", "To manage server load"], correctAnswer: 1 },
    { question: "In data structures, what does 'AVL' stand for in an AVL tree", choices: ["Adelson-Velsky and Landis", "Automatic Variable Length", "Algorithm for Vector Lists", "Asymptotic Variable Length"], correctAnswer: 0 },
    { question: "What is 'memoization' in the context of dynamic programming?", choices: ["A method to store the results of expensive function calls", "A technique to sort data", "A process to clean memory", "A strategy for error handling"], correctAnswer: 0 },
    { question: "Which of the following protocols is used for email retrieval?", choices: ["SMTP", "FTP", "IMAP", "HTTP"], correctAnswer: 2 },
    { question: "What does the 'SOLID' acronym in software engineering stand for?", choices: ["Simple, Open, Low, Integrated, Durable", "Secure, Open, Layered, Integrated, Durable", "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion", "Single, Optimized, Layered, Independent, Durable"], correctAnswer: 2 }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleChoices(question) 
{
    const choices = question.choices;
    const correctAnswer = question.correctAnswer;
    let shuffledIndices = choices.map((_, index) => index);
    shuffle(shuffledIndices);

    const newChoices = shuffledIndices.map(index => choices[index]);
    const newCorrectAnswer = shuffledIndices.indexOf(correctAnswer);
    return { ...question, choices: newChoices, correctAnswer: newCorrectAnswer };
}

shuffle(questions);
questions = questions.map(shuffleChoices);

let currentQuestion = 0;
let score = 0;
const prizes = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 10000000];

function showInstructions() {
    alert("Instructions go here.");
}

function showAbout() {
    alert("About the game.");
}

function startGame() {
    document.getElementById('welcome-page').classList.add('hidden');
    document.getElementById('game-page').classList.remove('hidden');
    showQuestion();
}

let timerInterval;
let timeLimit;

function startTimer() {
    let timeDisplay = document.getElementById('timer-text');
    let timeLeft = timeLimit;

    timerInterval = setInterval(() => {
        timeDisplay.textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert("Time's up! Game over.");
            resetGame();
        }
    }, 1000);
}

function setTimer() {
    if (currentQuestion <= 9) {
        timeLimit = 20;
    } else if (currentQuestion <= 19) {
        timeLimit = 40;
    } else {
        timeLimit = null;
    }
}

function showQuestion() {
    clearInterval(timerInterval);
    setTimer();
    if (timeLimit !== null) {
        startTimer();
    } else {
        document.getElementById('timer-text').textContent = '∞';
    }

    const current = questions[currentQuestion];
    document.getElementById('question-number').textContent = `Question: ${currentQuestion + 1}`;
    document.getElementById('question').textContent = current.question;

    const choiceButtons = document.getElementById('choices').getElementsByTagName('button');
    current.choices.forEach((choice, index) => {
        choiceButtons[index].textContent = choice;
        choiceButtons[index].style.visibility = 'visible'; 
    });
}

function checkAnswer(selected) {
    clearInterval(timerInterval);
    if (selected === questions[currentQuestion].correctAnswer) {
        score = prizes[currentQuestion];
        document.getElementById('total-score').textContent = score.toLocaleString('en-IN');
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
            updatePrizeMoney();
        } else {
            alert("Congratulations! You won ₹" + score.toLocaleString('en-IN') + "!");
            resetGame();
        }
    } else {
        alert("Wrong answer! Game over. Your total score is ₹" + score.toLocaleString('en-IN'));
        resetGame();
    }
}

function updatePrizeMoney() {
    const prizeList = document.getElementById('prizes').getElementsByTagName('li');
    for (let i = 0; i < prizeList.length; i++) {
        if (i === questions.length - 1 - currentQuestion) {
            prizeList[i].classList.add('active');
        } else {
            prizeList[i].classList.remove('active');
        }
    }
}

updatePrizeMoney();

function resetGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('total-score').textContent = score;
    document.getElementById('welcome-page').classList.remove('hidden');
    document.getElementById('game-page').classList.add('hidden');
    document.getElementById('total-score').textContent = score.toLocaleString('en-IN');
    clearInterval(timerInterval);
    shuffle(questions);
    questions = questions.map(shuffleChoices);
    updatePrizeMoney();
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('start-button').addEventListener('click', startGame);
    document.getElementById('instruction-button').addEventListener('click', showInstructions);
    document.getElementById('about-button').addEventListener('click', showAbout);

    const choiceButtons = document.getElementById('choices').getElementsByTagName('button');
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].addEventListener('click', function() {
            checkAnswer(i);
        });
    }

    updatePrizeMoney();
});

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = 0;

setInterval(function() {
    let welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

document.getElementById('lifeline-50-50').addEventListener('click', function() {
    useFiftyFifty();
    this.style.visibility = 'hidden';
});

document.getElementById('lifeline-audience').addEventListener('click', function() {
    useAudiencePoll();
    this.style.visibility = 'hidden';
});

document.getElementById('lifeline-phone').addEventListener('click', function() {
    usePhoneAFriend();
    this.style.visibility = 'hidden';
});

function useFiftyFifty() {
    let removed = 0;
    const correct = questions[currentQuestion].correctAnswer;
    const choices = document.getElementById('choices').getElementsByTagName('button');
    for (let i = 0; i < choices.length; i++) {
        if (i !== correct && removed < 2) {
            choices[i].style.visibility = 'hidden';
            removed++;
        }
    }
}

function useAudiencePoll() {
    const correctAnswer = questions[currentQuestion].choices[questions[currentQuestion].correctAnswer];
    alert("Audience poll results: The correct answer is '" + correctAnswer + "'.");
}

function usePhoneAFriend() {
    const correctAnswer = questions[currentQuestion].choices[questions[currentQuestion].correctAnswer];
    alert("Phone a friend: The correct answer is '" + correctAnswer + "'.");
}



