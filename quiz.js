function checkAnswers() {
    var score = 0;

    if(document.getElementById('correct1').checked){
        score = score +1;
    }
    if(document.getElementById('correct2').checked){
        score = score +1;
    }
    let correct1 = document.getElementById('t1');
    let text1 = correct1.innerHTML;
    let correct2 = document.getElementById('t2');
    let text2 = correct2.innerHTML;
  
    let resultText = "You scored " + score + " out of 2!";
    if (score === 2) {
      resultText += " Perfect! ";
    }
    alert("The correct answers were: \n" + text1 + "\n" + text2 + "\n" + resultText)
  
  }