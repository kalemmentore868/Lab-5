const main = (() => {
  const Rectangle = require("./Rectangle");
  const prompt = require("prompt-sync")();

  const handleAllRectangles = (numOfRectangles) => {
    for (let i = 0; i < numOfRectangles; i++) {
      const length = parseInt(prompt("Please enter a length "));
      const width = parseInt(prompt("Please enter a width "));

      const rectangle = new Rectangle(length, width);

      console.log(`Area: ${rectangle.areaOfRect()}`);
      console.log(`Circumference: ${rectangle.circumferenceOfRect()}`);
    }
  };

  const numOfRects = parseInt(
    prompt("Please enter the number of rectangles you want to check ")
  );

  handleAllRectangles(numOfRects);
})();
