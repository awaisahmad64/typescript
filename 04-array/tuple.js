// define our Tuple
var ourTuple;
// initialize incorrectly throws an error
//ourTuple = [false, 'Welcome to coding with Awais',64]
// initialize correctly
ourTuple = [64, false, 'Welcome to coding with Awais'];
// we have no type safty in our tuple for indexes 3+
// ourTuple.push('no type safty');
//output: [ 64, false, 'Welcome to coding with Awais', 'no type safty' ]
// so How to make type safty in our tuple, we make it readonly, above where tuple is defined
console.log(ourTuple);
//Named Tupls
//Named tuples allow us to provide context for our values at each indexes.
var graph = [12, 34];
// tuple destructuring
var x = graph[0], y = graph[1];
console.log(x, y);
keepa 
