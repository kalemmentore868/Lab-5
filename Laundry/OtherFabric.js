class Other {
  otherWeight;

  constructor(w) {
    this.otherWeight = w;
  }

  otherCost() {
    return this.otherWeight * 0.55;
  }
}

module.exports = Other;
