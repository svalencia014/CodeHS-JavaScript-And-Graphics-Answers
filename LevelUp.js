// Define the number of levels in the game
const NUM_LEVELS = 3;

// Create a variable to track the player's current level
let level = 1;

// Define a function for each level of the game
function playLevel1() {
  console.log("Level 1: Welcome to the game!");
}

function playLevel2() {
  console.log("Level 2: You are now halfway through the game!");
}

function playLevel3() {
  console.log("Level 3: Congratulations! You have completed the game!");
}

function main() {
    // Use a while loop to simulate playing the game
    while (level <= NUM_LEVELS) {
        // Check the player's level and print the appropriate message
        switch (level) {
            case 1:
            playLevel1();
            break;
            case 2:
            playLevel2();
            break;
            case 3:
            playLevel3();
            break;
            default:
            console.log("Invalid level.");
        }

        // Increase the player's level
        level++;
    }
}

main();
