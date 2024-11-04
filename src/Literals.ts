//  Literal TYPES means Exact/ specified we need to user only this value

type Color = "Red" | "Blue" | "White";

function getColorMessage(color: Color): string {
    return `the selected color is ${color}`;
}

console.log(getColorMessage("White"));

// Nullable Types
// ts is strict in null it give error during compile time it self

function getName(name: string | null | undefined) {
    if (name) {
        console.log("name in upperCase", name.toUpperCase());
    } else {
        console.log("Hello ");
    }
}

// getName(null)  //it not allow but when we use union type it allow to pass null in function
// getName("");
