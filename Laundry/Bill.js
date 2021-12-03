class Bill {
  cotton;
  denim;
  other;

  constructor(c, d, o) {
    this.cotton = c;
    this.denim = d;
    this.other = o;
  }

  washCost() {
    return (
      this.cotton.cottonCost() + this.denim.denimCost() + this.other.otherCost()
    );
  }

  dryerCost() {
    const totalLbs =
      this.cotton.cottonWeight +
      this.denim.denimWeight +
      this.other.otherWeight;

    let dryCost;

    0 < totalLbs && totalLbs <= 7
      ? (dryCost = Number.parseFloat(totalLbs * 2.5).toFixed(2))
      : 7 < totalLbs && totalLbs <= 12
      ? (dryCost = Number.parseFloat(totalLbs * 1.5).toFixed(2))
      : (dryCost = Number.parseFloat(totalLbs * 0.55).toFixed(2));

    return dryCost;
  }
}

module.exports = Bill;
