// Function to draw a rectangle
function drawRectangle() {
  let rectangle = new Rectangle(100, 50);
  rectangle.setColor("red");
  rectangle.setPosition(200, 200);
  add(rectangle);
}

// Function to draw a line
function drawLine() {
  let line = new Line(150,150, 100, 0);
  line.setColor("blue");
  add(line);
}

// Function to draw a circle
function drawCircle() {
  let circle = new Circle(50);
  circle.setColor("green");
  circle.setPosition(250, 250);
  add(circle);
}

function main() {
    // Get the user input
    let number = readInt("Enter a number: ");

    // Check the number and draw the corresponding shape
    if (number == 4 || number == 44) {
        drawLine();
    } else if (number % 2 === 0 && number !== 4 && number !== 44) {
        drawRectangle();
    } else {
        drawCircle();   
    }
}

main();
