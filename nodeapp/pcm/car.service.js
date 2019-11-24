let cars = require('./store').cars

function findAll() {
    return cars
}

function findByName(name) {
    return cars.filter(car =>car.make === name)
}

function remove(name) {
    return cars.filter(car =>car.make !== name)
}

console.log(findAll());
console.log("\n Byname: ", findByName('1Hyundai'));
console.log("\n Remove: ", remove('2Hyundai'));

module.exports = {
    findAll, findByName, remove
}