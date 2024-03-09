let x: unknown = 'Hello';
//diffrent method to perform casting
console.log((x as string).length);
console.log((<string>x).length);
