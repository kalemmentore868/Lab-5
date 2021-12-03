class Rectangle {
  length;
  width;

  constructor(l, w) {
    this.length = l;
    this.width = w;
  }

  areaOfRect() {
    return this.length * this.width;
  }

  circumferenceOfRect() {
    return this.length * 2 + this.width * 2;
  }
}

module.exports = Rectangle;
