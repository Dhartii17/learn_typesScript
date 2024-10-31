type Driveable = {
    drive: () => void;
};

type filable = {
    fillTank: () => void;
};

type Vehicle = Driveable & filable;

let myCar: Vehicle = {
    drive: () => {
        console.log("Driving the Car");
    },
    fillTank: () => {
        console.log("File the tank of Car");
    },
};

let myBike: Vehicle = {
    drive: () => {
        console.log("Riding the bike");
    },
    fillTank: () => {
        console.log("No tank to fill on a bike!");
    },
};

myCar.drive();
myCar.fillTank();
myBike.drive();
myBike.fillTank();

type Addition = {
    add: (a: number, b: number) => number;
};

type Multipication = {
    multi: (a: number, b: number) => number;
};

type MathOperation = Addition & Multipication;

let calculator: MathOperation = {
    add: (a, b) => {
        return a + b;
    },
    multi: (a, b) => {
        return a * b;
    },
};

console.log("Addition", calculator.add(10, 10));
console.log("multipication", calculator.multi(10, 10));
