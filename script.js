// GIVEN I am taking a code quiz
// WHEN I click the start button

var timerId;
var timeLeft;    
var counterElement = document.getElementById("counter");

var questionOneEl = document.getElementById('question-one');
var questionTwoEl = document.getElementById('question-two'); 
var questionThreeEl = document.getElementById('question-three');
var finalResultsEl = document.getElementById('results');

// timer starts     
function countdown() {
  if (timeLeft == 0) {
    endGame();
  } else {
    counterElement.innerHTML = timeLeft + " seconds remaining";
    timeLeft--;
  }
} 

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function wrongAnswer() {
  timeLeft = timeLeft - 10; 
}

function showHideElement(element, show) {
  show === true ? element.style.display = "block" : element.style.display = "none"; 
}

function startGame() {
  clearInterval(timerId);
  timeLeft = 75;  
  timerId = setInterval(countdown, 1000);
  showHideElement(counterElement, true);
  showHideElement(questionOneEl, true);
  showHideElement(questionTwoEl, false);
  showHideElement(questionThreeEl, false);

  document.getElementById("final-results").innerHTML = "";

  showHideElement(finalResultsEl, false);
}

function endGame() {
  clearInterval(timerId);
  showHideElement(questionOneEl, false);
  showHideElement(questionTwoEl, false);
  showHideElement(questionThreeEl, false);
  showHideElement(counterElement, false);
  
  document.getElementById("final-results").innerHTML = "Your final score: " + timeLeft;

  showHideElement(finalResultsEl, true);
}

function saveScore() {
  sessionStorage.setItem(document.getElementById("Initials").value,timeLeft);
}

document.getElementById("start-quiz").addEventListener("click", startGame);
document.getElementById("savescore").addEventListener("click", saveScore);


// WHEN I answer a question correctly
// THEN I am presented with another question
var q1radios = document.querySelectorAll('input[type=radio][name="q1choice"]');
for (var i = 0; i < q1radios.length; i++) {
  q1radios[i].addEventListener("change", 
    function() {
        console.log(this.value);
      if (this.value == "Alerts"){
        showHideElement(questionOneEl, false);
        showHideElement(questionTwoEl, true);
      }
      else {
        wrongAnswer();
      }
    });
} 

// WHEN I answer a question correctly
// THEN I am presented with another question
var q2radios = document.querySelectorAll('input[type=radio][name="q2choice"]');
for (var i = 0; i < q2radios.length; i++) {
  q2radios[i].addEventListener("change", 
    function() {
        console.log(this.value);
      if (this.value == "all of the above"){
        showHideElement(questionTwoEl, false);
        showHideElement(questionThreeEl, true);
      }
      else {
        wrongAnswer();
      }
    });
} 

var q3radios = document.querySelectorAll('input[type=radio][name="q3choice"]');
for (var i = 0; i < q3radios.length; i++) {
  q3radios[i].addEventListener("change", 
    function() {
        console.log(this.value);
      if (this.value == "console.log"){
        endGame();
      }
      else {
        wrongAnswer();
      }
    });
} 

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    //game over screen opens

// WHEN the game is over
    //stop game 
// THEN I can save my initials and score
    //enter intials and score
