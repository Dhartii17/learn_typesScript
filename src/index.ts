// Built In Types

let sales: number = 12_435_67;
let course: string = "Dharti";
let is_published: Boolean = true;
let level;

// any type
function userInfo(description: any) {
  console.log("description Value", description);
}

userInfo(true);
// Array

const numberArr = [1, 2, "3"]; // it throw an error
// const numberArrOne: number[] = [1, 2, "3"]; //not work
const numberArrTwo: number[] = [1, 2, 3];
console.log("number Array with number & string", numberArr);

//Tuples
const userTuple: [number, string, boolean, number, boolean] = [
  23,
  "Dharti",
  true,
  30,
  true,
];
// userTuple.push(45);
console.log("userTuple", userTuple);

// Enums
// const small =1;
// const medium = 2;
// const large = 3;

enum Size{
  Small = 3,
  Medium ,
  Large,
}

const mySize: Size = Size.Medium;
console.log("mySize of value", mySize);

// function
// textYear make it Optional
function calculateTax(income: number, taxYear?: number): number {
  if (income < 2000) {
    return 10;
  }
  return 0;
}

console.log("function called", calculateTax(50000));

// Objects

const employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // if there is nothing to in return write void
} = {
  id: 1,
  name: "Dharti",
  retire: (date) => {
    console.log(date);
  },
};

console.log("print the emp object", employee);
