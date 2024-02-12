// define our Tuple
let ourTuple: readonly [number, boolean, string];
//As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:
// initialize incorrectly throws an error
//ourTuple = [false, 'Welcome to coding with Awais',64]

// initialize correctly
ourTuple = [64, false, 'Welcome to coding with Awais'];
// if we disturb its order it will generate error

// we have no type safty in our tuple for indexes 3+
// ourTuple.push('no type safty');
//output: [ 64, false, 'Welcome to coding with Awais', 'no type safty' ]

// so How to make type safty in our tuple, we make it readonly, above where tuple is defined
console.log(ourTuple);

//Named Tupls
//Named tuples allow us to provide context for our values at each indexes.
const graph: [x: number, y: number] = [12, 34];
// tuple destructuring
const [x, y] = graph;
console.log(x, y);
