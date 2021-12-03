const main = (() => {
  const prompt = require("prompt-sync")();
  const radius = parseInt(prompt("Please enter circle radius "));
  const Circle = require("./Circle.js");

  const circle = new Circle(radius);

  console.log("Area of circle");
  console.log(circle.areaOfCircle().toFixed(2));
  console.log("Circumference  of circle");
  console.log(circle.circumferenceOfCircle().toFixed(2));
})();
