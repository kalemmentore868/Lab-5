class Circle {
  radius;

  constructor(r) {
    this.radius = r;
  }

  areaOfCircle() {
    return Math.PI * this.radius ** 2;
  }

  circumferenceOfCircle() {
    return 2 * Math.PI * this.radius;
  }
}

module.exports = Circle;
