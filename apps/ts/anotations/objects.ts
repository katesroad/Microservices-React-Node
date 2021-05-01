const person = {
  age: 19,
  name: "person",
  coordinates: {
    lng: 10,
    lat: 120,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age }: { age: number } = person;

const {
  coordinates: { lat, lng },
} = person;
