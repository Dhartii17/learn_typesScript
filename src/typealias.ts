type Employee = {
  readonly id: number;
  name: string;
  email: string;
  age?: number;  // it become optional if any one wants to add o not 
  retire?: (date: Date) => void;
};

const emp: Employee = {
  id: 34,
  name: "dharti",
  email: "dharti@gmail.com",
  // age: 34,
  retire: (date) => {
    console.log("date ", date);
  },
};

const empTwo: Employee = {
  id: 44,
  name: "Gudi",
  email: "test@gmail.com",
  age: 45,
  retire: (date) => {
    console.log("date ", date);
  },
};

console.log("emp", emp);
console.log("empTwo", empTwo);
