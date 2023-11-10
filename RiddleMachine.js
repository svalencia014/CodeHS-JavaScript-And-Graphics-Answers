function riddle1() {
  let answer = "candle";

  while (true) {
    let guess = prompt("Riddle #1: I'm tall when I'm young and short when I'm old. What am I?");

    if (guess === answer) {
      console.log("You got it!");
      break;
    } else if (guess === "I give up") {
      console.log("The answer is " + answer + "!");
      break;
    } else {
      console.log("Incorrect. Try again!");
    }
  }
}

function riddle2() {
  let answer = "towel";

  while (true) {
    let guess = prompt("Riddle #2: What gets wet while drying?");

    if (guess === answer) {
      console.log("You got it!");
      break;
    } else if (guess === "I give up") {
      console.log("The answer is " + answer + "!");
      break;
    } else {
      console.log("Incorrect. Try again!");
    }
  }
}

function riddle3() {
  let answer = "dictionary";

  while (true) {
    let guess = prompt("Get ready, this is the toughest riddle yet!");
    guess = guess.toLowerCase();

    if (guess === answer) {
      console.log("Good guess!");
      break;
    } else if (guess === "I give up") {
      console.log("The answer is " + answer + "!");
      break;
    } else {
      console.log("Incorrect. Try again!");
    }
  }
}

function main() {
    // Start the program
    riddle1();
    riddle2();
    riddle3();

    console.log("Wowza! You're good at riddles!");
}
main();
