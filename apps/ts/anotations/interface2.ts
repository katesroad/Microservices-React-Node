// as long as an object has all the properties required in an interface
// the instance is reportable to an instance
interface Car {
  summary(): string;
}

const civicCar1 = {
  name: "civic",
  year: 2020,
  broken: true,
  summary() {
    return this.name;
  },
};

const honadaCar1 = {
  name: "honada",
  year: 2023,
  broken: false,
  summary() {
    return this.name;
  },
};

const printCar2 = (car: Car) => {
  console.log(car.summary);
};

printCar(civicCar1);
