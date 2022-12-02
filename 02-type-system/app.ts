// initialized and decalare a variable fullName of string as we use js
export {}; // this we use to tell typescript this is different module from all others.
// Basic types
var isDone: boolean = true;
var height: number = 8;
let name: string = 'Awais';
let list: number[] = [1, 2, 3, 4, 5];
//Emun
enum Color {
  Red,
  Green,
  Blue,
}
var c: Color = Color.Red;
//any : useful for those variables that we have no idea about.
var notSure: any = 4;
notSure = 'may be string';
notSure = false;

// not sure about list type so
let notSureList: any[] = [1, 3, true, false, 'Awais'];
// now we discuss void absense of type in function
function voidDemo(): void {
  console.log('The Absense of the type');
}

// optional parameter
function demoOptionalParameter(name?: string) {
  if (name) {
    console.log('Hello' + name + '!');
  }
  console.log('Hello');
}
