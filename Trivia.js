$( document ).ready ( function () {
// Question set
var Questions = [
  {
    question: "Who does Michael award the 'Hottest in the Office' Dundie to?",
    answers: ["Ryan", "Pam", "Meredith", "Creed"],
    correctAnswer: "Ryan"
  },
  {
    question: "What is Michael Scotts middle name??",
    answers: ["Kurt", "Jim", "Gary", "Kevin"],
    correctAnswer: "Gary"
  },
  {
    question: "Who does Michael fire on Halloween",
    answers: ["Creed", "Devon", "Pam", "Tony"],
    correctAnswer: "Devon"
  },
  {
    question: "Who killed Angelas cat?",
    answers: ["Creed", "Andy", "Dwight", "Angela"],
    correctAnswer: "Dwight"
  },
  {
    question: "Where does Jim put Dwights stapler?",
    answers: ["On his Desk", "In the Trash", "In Jell-o", "In the Fridge"],
    correctAnswer: "In Jell-o"
  },
  {
    question: "What band was Creed Bratton in?'",
    answers: ["The Grass Roots", "The Beetles", "The Rascals", "Metallica"],
    correctAnswer: "The Grass Roots"
  },
  {
    question: "How did Michael burn his foot?",
    answers: ["Walking on Coals", "A George Forman Grill", "Hot Coffee", "Condo Fire"],
    correctAnswer: "A George Forman Grill"
  },
  {
    question: "What county is D.M. Scranton in?",
    answers: ["Wayne", "Susquehanna", "Luzerne", "Lackawanna"],
    correctAnswer: "Lackawanna"
  }
];
// OnClick function to start the game
$("#start").on("click", function () {
  game.start();
});

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function () {
      game.counter--;
      $("#counter").html(game.counter);
      if(game.counter <= 0) {
          game.finish();
      }
  },
// Start Function will begin the countdown from 120 seconds 
  start: function () {
      timer = setInterval(game.countdown, 1000);
// Here the trivia div is appended to display the countdown
      $("#trivia").prepend('<h3>Time Remaining: <span id="counter">120</span> Seconds</h3>')
// Start Button is removed
      $("#start").remove();
// Loop through all the questions and answers and display them on the page
      for (var i = 0; i < Questions.length; i++) {
          $("#trivia").append("<h4>" + Questions[i].question + "</h4>");
          for (var j = 0; j < Questions[i].answers.length; j++) {
              $("#trivia").append("<input type='radio' name='question-" + i + "' value='" + Questions[i].answers[j] + "'>" +Questions[i].answers[j] + '<br/>');
          }
      }
  },
// Finish function to end the game and compare the user answers with correct answers
  finish: function () {
    $.each($('input[name="question-0"]:checked'),function () {
      if($(this).val()==Questions[0].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1"]:checked'),function () {
      if($(this).val()===Questions[1].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'),function () {
      if($(this).val()==Questions[2].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });

    $.each($('input[name="question-3"]:checked'),function () {
      if($(this).val()==Questions[3].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4"]:checked'),function () {
      if($(this).val()==Questions[4].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });
    $.each($('input[name="question-5"]:checked'),function () {
      if($(this).val()==Questions[5].correctAnswer){
          game.correct++;
      }else{
          game.incorrect++;
      }
    });
    $.each($('input[name="question-6"]:checked'),function () {
      if($(this).val()==Questions[6].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });
      $.each($('input[name="question-7"]:checked'),function () {
      if($(this).val()==Questions[7].correctAnswer){
        game.correct++;
      }else{
        game.incorrect++;
      }
    });
      this.result();
  },
// Clear the timer and show the results of the quiz
  result: function () {
      clearInterval(timer);
      $("#trivia h2").remove();
      $("#trivia").html("<h2>finish!</h2>");
      $("#trivia").append("<h3>Correct Answers: " + this.correct + "</h3>");
      $("#trivia").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      $("#trivia").append("<h3> Unanswered: " + (Questions.length-(this.incorrect+this.correct))+"</h3>");
      $("#submit").css("display","none");
  }
}

$("#submit").on("click", function () {
  game.counter = -1;
});
})