

  function fly(){
    var heart = document.getElementById('heart');
    var position = 0;
    var flyingHeart = setInterval(frame, 70);

    function frame(){
        if(position === 60){
          clearInterval(position);
          heart.style.top = "";
          heart.style.left = "";
        }
        else {
          position++
          heart.style.top = position + 'px';
          heart.style.left = position + 'px';
        }
    }

  }
  fly();


  //SCENARIO 2.1

  // global variables
  var scenario1btn = document.getElementById('scenario1-btn');
  var scenarioParag = document.getElementsByClassName("scenario");
  var parent = document.getElementsByTagName('ol');
  var removeOption = document.getElementById('remove');
  var options = document.getElementsByTagName("li");
  var scenario2 = [];


  scenario1btn.addEventListener("click", function(event){
    var userInput =  ($("#scenario1-input").val());
    var options = document.getElementsByTagName("li");
    var scenarioParag = document.getElementsByClassName("scenario");

    if (userInput === "1"){
      // user picks option 1: branch off to no worries let's eat!(SC2)
      scenario1btn.getAttributeNode("href").value = "level1-sc2.html";

    }
    else {
      // user picks option 2: special lose screen for rudies!
      window.location.href = "lose-screen-rude.html";
    }

  });
