// GIVEN I am taking a code quiz
// WHEN I click the start button
var startQuiz; 

var timeLeft = 75;    
var elem = document.getElementById("counter");
  
// 

var timerId;

// timer starts     
function countdown() {
  //var timerId = setInterval(countdown, 1000);
  if (timeLeft == -1) {
    clearInterval(timerId);
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
} 


//function show/hide pass in element name show or hide


document.getElementById("start-quiz").addEventListener("click", 
    function (){
      timerid = setInterval(countdown, 1000)

    }
);
 


//presented with a question
var questionOneEl = document.getElementById("question-one");
function quizTimer() {
  if (timeLeft.value > 0) {
    questionOneEl.style.visibility = 'visible';
  } //start button is clicked, present a question
}
//questionOneEl.style.visibility = 'hidden';


// WHEN I answer a question correctly





// THEN I am presented with another question
var questionTwoEl = document.getElementById('question-two');
questionTwoEl.style.visibility = 'hidden';
// questionTwoEl.style.visibility = 'visible';





// WHEN I answer a question correctly

// THEN I am presented with another question
var questionThreeEl = document.getElementById('question-three');
questionThreeEl.style.visibility = 'hidden';
// questionThreeEl.style.visibility = 'visible';


// WHEN I answer a question incorrectly




// THEN time is subtracted from the clock
  //function to subtract time from current time based on the user input

// WHEN all questions are answered or the timer reaches 0
  //if all questions answered || timer =0
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

// THEN the game is over
    //game over screen opens

// WHEN the game is over
    //stop game 
// THEN I can save my initials and score
    //enter intials and score
