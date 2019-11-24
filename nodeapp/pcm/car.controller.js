 const {
    findAll, findByName, remove
} = require('./car.service') 
//const carService = require('./car.service')

/* console.log(carService.findAll());
console.log("\n Byname: ", carService.findByName('1Hyundai'));
console.log("\n Remove: ", carService.remove('2Hyundai')); */
console.log(findAll());
console.log("\n Byname: ", findByName('1Hyundai'));
console.log("\n Remove: ", remove('2Hyundai'));