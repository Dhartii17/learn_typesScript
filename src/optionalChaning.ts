type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

// let custmoer = getCustomer(0) it return null 
let custmoer = getCustomer(1)
console.log("Get the customer Data", custmoer);
console.log(`Get User data ${custmoer?.birthday?.getFullYear()}`);

