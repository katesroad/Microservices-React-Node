interface Car {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const civicCar = {
  name: "civic",
  year: 2020,
  broken: true,
  summary() {
    return this.name;
  },
};

const honadaCar = {
  name: "honada",
  year: 2023,
  broken: false,
  summary() {
    return this.name;
  },
};

const printCar = (car: Car) => {
  console.log(car.summary);
};

printCar(civicCar);
