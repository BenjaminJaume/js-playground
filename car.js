// Script created by Benjamin Jaume
// It uses:
//     - Types & Coersion
//     -
//     - this & Prototype

const CAR_API = 'https://www.website.car.au';

class Car {
  constructor(brand, carKey, owner) {
    this.brand = brand;
    this.carKey = carKey;
    this.owner = owner;
    this.isStarted = false;

    this.passenger = 0;
    this.color = '';
    this.isConvertible = false;
  }

  displaySettings() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Owner: ${this.owner}`);
    this.passenger !== undefined
      ? console.log(`Passenger: ${this.passenger}`)
      : '';
    this.color !== undefined ? console.log(`Color: ${this.color}`) : '';
    this.isConvertible !== undefined
      ? console.log(`Convertible: ${this.isConvertible}`)
      : '';
    console.log(`\n`);
  }

  checkEngine() {
    console.log(`Car started: ${this.isStarted}`);
  }

  startEngine(key) {
    if (Number(key) == this.carKey) {
      console.log(`🚗 Welcome, ${this.owner}`);
      this.isStarted = true;
    } else {
      console.log('🚫 Wrong key. Who are you?');
      this.isStarted = false;
    }
    this.checkEngine();
  }

  stopEngine() {
    if (this.isStarted !== true) {
      console.log('The car is already stopped');
    } else {
      this.isStarted = !this.isStarted;
      this.checkEngine();
    }
  }
}

function loadSettings(car) {
  fakeAjax(CAR_API, car.brand, function(carSettings) {
    car.passenger = carSettings.passenger;
    car.color = carSettings.color;
    car.isConvertible = carSettings.isConvertible;
  });
}

var mercedes = new Car('mercedes', 1234, 'Benjamin');
var bmw = new Car('bmw', 4321, 'Mickael');
var tesla = new Car('tesla', 666, 'Axel');

loadSettings(mercedes);
loadSettings(bmw);
loadSettings(tesla);

setTimeout(function() {
  tesla.displaySettings();
}, 500);

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
        console.log('There is a problem with the request');
    }

    callback({
      passenger,
      color,
      isConvertible
    });
  }, 250);
}
