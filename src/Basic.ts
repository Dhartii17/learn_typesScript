// Built In Types

let sales: number = 12_435_67;
let course: string = "Dharti";
let is_published: Boolean = true;
let level;

// any type
function userInfo(description: any): void {
  console.log("description Value", description);
}

userInfo(true);
userInfo(124);
userInfo("Dharti");
// Array

const numberArr = [1, 2, "3"];
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
console.log(" Type of userTuple", typeof userTuple);

const secondUserTuple: string[] = ["dharti", "dudhat", "kano", "patel"];
console.log(" type of Second User Tuple", typeof secondUserTuple);

// Enums
// const small =1;
// const medium = 2;
// const large = 3;

enum Size {
  Small = 3,
  Medium,
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

// const empThree: Employee = {
//   id: 4,
//   name: "test",
//   email: "test@gmail.com",
//   age: 24,
//   retire: (date) => {
//     console.log("date ", date);
//   },
// };

// console.log("print the emp object", employee);
// console.log("Type Alias ", empThree);
