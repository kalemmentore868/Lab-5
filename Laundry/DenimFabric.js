class Denim {
  denimWeight;

  constructor(w) {
    this.denimWeight = w;
  }

  denimCost() {
    return this.denimWeight * 2.75;
  }
}

module.exports = Denim;
