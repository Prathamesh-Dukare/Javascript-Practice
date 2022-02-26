const {EventEmitter} = require("events")

// console.log(EventEmitter);
const myEmitter = new EventEmitter
myEmitter.on('event1', () => {
    console.log('Event1 Fired!');
  });

  console.log("djvhd dfzjhfjcd fjdjdndjcmndc dcvfhvcdf");
  myEmitter.emit('event1');