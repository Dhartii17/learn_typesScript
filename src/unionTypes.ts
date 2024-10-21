function checkUnionTypes(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log("tets the number union types", checkUnionTypes(10));
console.log("test the string union type", checkUnionTypes("10kg"));
