var colour=["red", "blue", "green", "yellow"];

var sequence = [];




var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){

var userChoice = $(this).attr("id");
userClickedPattern.push(userChoice);
playsound(userChoice);

$("#" + userChoice).addClass("pressed");

setTimeout(function () {
  $("#" + userChoice).removeClass("pressed");
}, 100);

checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currlvl){
  if(userClickedPattern[currlvl]===sequence[currlvl]){
    console.log("success");

    if(userClickedPattern.length===sequence.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }else{
    console.log("wrong");
    playsound("wrong");
    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    level=0;
    started=false;
  }

}


function playsound(name){
  var music = new Audio(  name + ".mp3");
  music.play();
}

function nextSequence(){


  userClickedPattern=[];
  $("#level-title").text("Level " + level);
  level++;
  var A = Math.floor((Math.random() * 4));

  var color_chosen = colour[A];
  sequence.push(color_chosen);

  $("#" + color_chosen).fadeIn(100).fadeOut(100).fadeIn(100);

  playsound(color_chosen);

}
