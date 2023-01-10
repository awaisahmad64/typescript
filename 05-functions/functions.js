// void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log('Hello');
}
printHello();
//Function parameters are typed with a similar syntax as variable declarations and function return type
function add(a, b) {
    if (b === void 0) { b = 18; }
    return a + b;
}
console.log(add(12, 18));
