const CAR_API = 'https://www.website.car.au';

class Car {
  constructor(brand, carKey, owner) {
    this.brand = brand;
    this.carKey = carKey;
    this.owner = owner;
    this.isStarted = false;
  }

  checkEngine() {
    console.log(`Car started: ${this.isStarted}`);
  }

  startEngine(key) {
    if (Number(key) == this.carKey) {
      console.log('Good to go');
      this.isStarted = true;
    } else {
      console.log('Who is in the car?');
      this.isStarted = false;
    }
    this.checkEngine();
  }

  stopEngine() {
    if (this.isStarted !== true) {
      console.log('STOP. The car is already stopped');
    } else {
      this.isStarted = !this.isStarted;
      this.checkEngine();
    }
  }
}

function loadSettings(car) {
  return fakeAjax(CAR_API, car.brand, function(carSettings) {
    console.log(`Brand: ${car.brand}`);
    console.log(`Passenger: ${carSettings.passenger}`);
    console.log(`Color: ${carSettings.color}`);
    console.log(`Convertible: ${carSettings.isConvertible}`);
    console.log(`\n`);
  });
}

var mercedes = new Car('mercedes', 1234, 'Benjamin');
var bmw = new Car('bmw', 4321, 'Mickael');
var tesla = new Car('tesla', 666, 'Axel');

loadSettings(mercedes);
loadSettings(bmw);
loadSettings(tesla);

// ***********************

function fakeAjax(url, brand, callback) {
  setTimeout(function() {
    let passenger;
    let color;
    let isConvertible;

    switch (brand) {
      case 'mercedes':
        passenger = 5;
        color = 'black';
        isConvertible = false;

        break;

      case 'bmw':
        passenger = 3;
        color = 'white';
        isConvertible = true;
        break;

      case 'tesla':
        passenger = 5;
        color = 'blue';
        isConvertible = true;
        break;

      default:
        console.log('There is a problem with your request');
    }
    callback({
      passenger,
      color,
      isConvertible
    });
  }, 500);
}
