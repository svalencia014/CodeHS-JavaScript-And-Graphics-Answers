// Create a function to draw a circle with the given radius and color
function drawCircle(radius, color) {
  // Create a new Circle object
  var circle = new Circle(radius);

  // Set the center of the circle to the center of the canvas
  circle.setPosition(getWidth() / 2, getHeight() / 2);

  // Set the color of the circle
  circle.setColor(color);

  // Add the circle to the canvas
  add(circle);
}
function main() {
  // Start drawing circles
  var radius = 200;
  var count = 0;
  while (radius > 0) {
    // Get the current color
    var color = count % 2 === 0 ? "red" : "black";

    // Draw a circle with the current radius and color
    drawCircle(radius, color);

    // Decrease the radius
    radius -= 20;

    // Increment the color counter
    count++;
  }
}

main();
