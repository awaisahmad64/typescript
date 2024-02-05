function identity<Type>(args: Type): Type {
  return args;
}
const output = identity<string>('Awais Ahmad');
console.log(output);
const outPutNumber = identity<number>(12345);
console.log(outPutNumber);
