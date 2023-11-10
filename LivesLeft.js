// Create a function to play the game
function play() {
  // Initialize the number of lives
  let lives = 3;

  // Start a for loop to iterate over each life
  for (let i = 0; i < lives; i++) {
    // Print out how many lives are left
    console.log("Lives left: " + lives);

    // Generate a random number to determine the difficulty of the challenge
    let difficulty = Randomizer.nextInt(1, 10);

    // Check if the user passes or fails the challenge
    if (difficulty >= Randomizer.nextInt(1,10)) {
      console.log("You passed the challenge!");
    } else {
      console.log("You failed the challenge!");
      lives--;
    }

    // If the user has no lives left, end the game
    if (lives == 0) {
      console.log("Game over!");
      break;
    }
  }
}

// Play the game
play();
