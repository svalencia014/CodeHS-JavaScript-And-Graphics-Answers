// Function to draw a circle
function drawCircle(color) {
  let circle = new Circle(50);
  circle.setColor(color);
  circle.setPosition(250, 250);
  add(circle);
}

// Function to draw a rectangle
function drawRectangle(width, height) {
  let rectangle = new Rectangle(width, height);
  rectangle.setColor("black");
  rectangle.setPosition(200, 200);
  add(rectangle);
}

function main() {
    // Get the user input
    let number = readInt("What is your favorite number? ");

    // Set the circle color based on the user input
    let circleColor = "purple";
    if (number % 2 === 0) {
    circleColor = "red";
    }

    // Draw the circle and rectangle
    drawCircle(circleColor);
    drawRectangle(100, 50);
}

main();
