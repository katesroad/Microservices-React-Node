// general strategy for reusable code in TS
interface Reportable {
  summary(): string;
}

const localCivicCar = {
  name: "civic",
  year: 2020,
  broken: true,
  summary() {
    return this.name;
  },
};

const coke = {
  name: "coke",
  summary() {
    return this.name;
  },
};

const reportInfo = (reportable: Reportable) => {
  console.log(reportable.summary);
};

reportInfo(localCivicCar);
reportInfo(coke);
