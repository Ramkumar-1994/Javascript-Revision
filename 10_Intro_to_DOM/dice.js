function generateRandom() {
  let random = Math.ceil(Math.random() * 6);
  return random;
}

let diceAudio = document.getElementById("dice-audio");

let score = document.getElementById("score");
let roll = document.getElementById("roll");
let count = document.getElementById("count");

let scored = 0;
let counter = 0;
function Roll() {
  counter = counter + 1;
  // count.innerText = `Count:${counter}`;
  if (counter!=5) {
    let playerScore = generateRandom();
    console.log(playerScore);
    let dice = document.getElementById("dice");
    dice.classList.add("spin");
    diceAudio.play();
    scored = scored + playerScore;

    setTimeout(function () {
      dice.innerText = playerScore;
      dice.classList.remove("spin");
      score.innerText = `Score: ${scored}`;
    }, 1000);
  }
  else
  {
    roll.style.display='none'
    score.innerText=`Your Final Score is ${scored}`
    count.innerText=''
  }
}
