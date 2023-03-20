
// beregne resultat
function calculateResult() {
  var question1 = document.querySelector('input[name="question1"]:checked').value;
  var question2 = document.querySelector('input[name="question2"]:checked').value;
  var question3 = document.querySelector('input[name="question3"]:checked').value;
  var question4 = document.querySelector('input[name="question4"]:checked').value;
  var question5 = document.querySelector('input[name="question5"]:checked').value;
  var question6 = document.querySelector('input[name="question6"]:checked').value;
  var question7 = document.querySelector('input[name="question7"]:checked').value;
  var question8 = document.querySelector('input[name="question8"]:checked').value;
  var question9 = document.querySelector('input[name="question9"]:checked').value;
  var question10 = document.querySelector('input[name="question10"]:checked').value;
  var question11 = document.querySelector('input[name="question11"]:checked').value;
  var question12 = document.querySelector('input[name="question12"]:checked').value;
  var question13 = document.querySelector('input[name="question13"]:checked').value;
  var question14 = document.querySelector('input[name="question14"]:checked').value;
  var question15 = document.querySelector('input[name="question15"]:checked').value;
  var question16 = document.querySelector('input[name="question16"]:checked').value;
  var question17 = document.querySelector('input[name="question17"]:checked').value;
  var question18 = document.querySelector('input[name="question18"]:checked').value;
  var question19 = document.querySelector('input[name="question19"]:checked').value;
  var question20 = document.querySelector('input[name="question20"]:checked').value;

  var result = 0;
  
  if (question1 === "enig") {
    result += 5;
  } else if (question1 === "usikker") {
    result += 1,25;
  }
  
  if (question2 === "enig") {
    result += 5;
  } else if (question2 === "usikker") {
    result += 1,25;
  }
  
  if (question3 === "enig") {
    result += 5;
  } else if (question3 === "usikker") {
    result += 1,25;
  }

  if (question4 === "enig") {
    result += 5;
  } else if (question4 === "usikker") {
    result += 1,25;
  }

  if (question5 === "enig") {
    result += 5;
  } else if (question5 === "usikker") {
    result += 1,25;
  }

  if (question6 === "enig") {
    result += 5;
  } else if (question6 === "usikker") {
    result += 1,25;
  }

  if (question7 === "enig") {
    result += 5;
  } else if (question7 === "usikker") {
    result += 1,25;
  }

  if (question8 === "enig") {
    result += 5;
  } else if (question8 === "usikker") {
    result += 1,25;
  }

  if (question9 === "enig") {
    result += 5;
  } else if (question9 === "usikker") {
    result += 1,25;
  }

  if (question10 === "enig") {
    result += 5;
  } else if (question10 === "usikker") {
    result += 1,25;
  }

  if (question11 === "enig") {
    result += 5;
  } else if (question11 === "usikker") {
    result += 1,25;
  }

  if (question12 === "enig") {
    result += 5;
  } else if (question12 === "usikker") {
    result += 1,25;
  }

  if (question13 === "enig") {
    result += 5;
  } else if (question13 === "usikker") {
    result += 1,25;
  }

  if (question14 === "enig") {
    result += 5;
  } else if (question14 === "usikker") {
    result += 1,25;
  }

  if (question15 === "enig") {
    result += 5;
  } else if (question15 === "usikker") {
    result += 1,25;
  }

  if (question16 === "enig") {
    result += 5;
  } else if (question16 === "usikker") {
    result += 1,25;
  }

  if (question17 === "enig") {
    result += 5;
  } else if (question17 === "usikker") {
    result += 1,25;
  }

  if (question18 === "enig") {
    result += 5;
  } else if (question18 === "usikker") {
    result += 1,25;
  }

  if (question19 === "enig") {
    result += 5;
  } else if (question19 === "usikker") {
    result += 1,25;
  }

  if (question20 === "enig") {
    result += 5;
  } else if (question20 === "usikker") {
    result += 1,25;
  }


  document.getElementById("result").innerHTML = "Du er " + result + "% enig med Fremskrittspartiet.";
}