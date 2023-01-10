// void can be used to indicate a function doesn't return any value.
function printHello(): void {
  console.log('Hello');
}
printHello();
//Function parameters are typed with a similar syntax as variable declarations and function return type
// default parameter
function add(a: number, b: number = 18): number {
  return a + b;
}
console.log(add(12, 18));
