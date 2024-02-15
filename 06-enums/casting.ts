let x: unknown = 'Hello';
console.log((x as string).length);
console.log((<string>x).length);
