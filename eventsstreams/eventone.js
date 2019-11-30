const events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('Hello',(data = "default")=>{
    console.log('Hello event handler ....',data);
});
eventEmitter.on('PSL',()=>{
    console.log('PSL event handler ....');
});

eventEmitter.addListener('PSL',()=>{
    console.log('PSL event handler22 ....');
});

eventEmitter.emit('Hello');
eventEmitter.emit('Hello','VENU');
eventEmitter.emit('PSL');
eventEmitter.emit('Hello','VENU02');