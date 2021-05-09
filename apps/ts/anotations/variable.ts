const apples: number = 5;

let now = new Date();

now = new Date();

const colors: string[] = ["red", "green"];

// classes

class Car {}

// the variable car only references to an instance of Car
let car: Car = new Car();

let point: { x: number; y: number } = { x: 10, y: 10 };

// function
type LogFunc = (i: number) => void;
const logNum: LogFunc = (num: number) => console.log(num);

// type interence
let redColor; // the type of redColor is any
redColor = "red";

// the type of blueColor is string
let blueColor = "blue";

const json = '{"x":10, "y": 20}';

// typescript can't predict what could get from JSON.parse
// so it gives the return value with type *any*
const coordinates: { x: number; y: number } = JSON.parse(json);
