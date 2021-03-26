/*
Create Emitter class
Create a class/function that returns an Emitter object.
This object allows us to subscribe to an event and execute a callback
whenever that event is triggered. 
The emit function will trigger all functions subscribed to an event and passes
all supplied arguments.

A callback can be removed from being subscribed to an event.

functions - subscribe(eventName, cb), emit(eventName, args)
subscribe - returns 'release functionality'
*/

function Emitter() {

    // need object to track events and callback 
    // key: eventName
    // value: [cb1, cb2]
    const eventTracker = {};

    function subscribe(eventName, cb) {
        // 1, the event already exists
        // 2, the event does not exist 
        if (eventTracker[eventName]) {
            eventTracker[eventName].push(cb);
        } else {
            eventTracker[eventName] = [cb];
        }

        function release() {
            let theCbs = eventTracker[eventName]; 
            let idx = theCbs.indexOf(cb);
            if (idx > -1) {
                theCbs.splice(idx, 1) // deletes item from array (first arg the index number to start at, second arg = how many items to delete)
            }
        }

        return { 
            release 
        }
    }

    function emit(eventName, ...theArgs) {
        let cbs = eventTracker[eventName];
        for (let i = 0; i < cbs.length; i++) {
            let curCb = cbs[i]; 
            curCb.apply(null, theArgs);
        }
    }

    return {
        subscribe,
        emit
    }
  }
  
  let myEmit = new Emitter();
  
  function logArgs(...items) {
    console.log(items);
  }
  function sumAll(...nums) {
    let result = nums.reduce((acc, cur) => acc + cur, 0);
    console.log(result);
  }
  
  let sub1 = myEmit.subscribe("foo", logArgs); // should print [1,2]
  let sub2 = myEmit.subscribe("foo", sumAll); // should print 3
  
  let sub3 = myEmit.subscribe("bar", sumAll); // should print 11
  
  myEmit.emit("foo", 1, 2); // sub1 and sub2 triggered
  myEmit.emit("bar", 5, 6); // sub3 triggered
  sub1.release(); // remove sub1
  myEmit.emit("foo", 1, 2); // sub2 triggered
  
//   export default Emitter;
  