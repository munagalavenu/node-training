let car = {
    make: "Hyundai",
    model: "Grand i10",
    variant: "Sports"
};
let cars = [{
    make: "1Hyundai",
    model: "1Grand i10",
    variant: "1Sports"
},{
    make: "2Hyundai",
    model: "2Grand i10",
    variant: "2Sports"
},{
    make: "3Hyundai",
    model: "3Grand i10",
    variant: "3Sports"
},{
    make: "4Hyundai",
    model: "4Grand i10",
    variant: "4Sports"
}];
module.exports.cars = cars;
/* console.log(car.make);
console.log(car.model);
console.log(car.variant); */

let {make,model,variant} = car;

console.log(make);
let newcar = {...car,variant:'Magna'} //Here VARIANT KEY REPLACED EXISTED VARIANT KEY IN CAR OBJECT
console.log(newcar);