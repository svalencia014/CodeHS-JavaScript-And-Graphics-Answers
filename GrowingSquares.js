// Create a function to draw a background
function drawBackground() {
  // Create a rectangle to fill the canvas
  var rectangle = new Rectangle(getWidth(), getHeight());

  // Set the color of the rectangle
  rectangle.setColor("white");

  // Add the rectangle to the canvas
  add(rectangle);
}

// Create a function to draw a title
function drawTitle() {
  // Create a text object
  var text = new Text("Growing Square");

  // Set the position of the text object
  text.setPosition(10, 10);

  // Add the text object to the canvas
  add(text);
}

// Create a function to draw a square
function drawSquare(sideLength, x, y, color) {
  // Create a new square object
  var square = new Rectangle(sideLength, sideLength);

  // Set the position of the square object
  square.setPosition(x, y);

  // Set the color of the square object
  square.setColor(color);

  // Add the square object to the canvas
  add(square);
}

// Create a function to draw a stack of growing squares
function drawGrowingSquares() {
  // Initialize the square length
  var squareLength = 1;

  // Initialize the x and y coordinates of the square
  var x = 0;
  var y = 0;

  // Start a while loop
  while (squareLength < getWidth()) {
    // Draw a square with the current square length, x coordinate, y coordinate, and color
    drawSquare(squareLength, x, y, "red");

    // Increment the square length
    squareLength++;

    // Move the square 1 pixel in the x and y direction
    x++;
    y++;
  }
}

function main() {
    // Draw the background and title
    drawBackground();
    drawTitle();

    // Draw a stack of growing squares
    drawGrowingSquares();
}

main();
