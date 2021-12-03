class Clerk {
  parcelWeight;
  clerkId;
  firstName;
  lastName;

  constructor(p, c, f, l) {
    this.parcelWeight = p;
    this.clerkId = c;
    this.firstName = f;
    this.lastName = l;
  }

  deliveryCalculator() {
    let result;
    switch (true) {
      case this.parcelWeight < 2.5:
        result = 3.5 * this.parcelWeight;
        break;
      case this.parcelWeight >= 2.5 && this.parcelWeight < 5:
        result = 2.85 * this.parcelWeight;
        break;
      case this.parcelWeight >= 5 && this.parcelWeight < 7:
        result = 2.45 * this.parcelWeight;
        break;
      case this.parcelWeight >= 7:
        result = 3.25 * this.parcelWeight;
        break;
    }

    return result;
  }
}

module.exports = Clerk;
