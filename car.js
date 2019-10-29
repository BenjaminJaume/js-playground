class Car {
  constructor(key) {
    this.passengers = 0;
    this.key = key;
  }

  startEngine(key) {
    if (Number(key) == 1234) {
      console.log('Good to go');
    } else {
      console.log('Who is in the car?');
    }
  }
}

var mercedes = new Car(1234);
mercedes.startEngine(1234);
