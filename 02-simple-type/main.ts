// There are two main ways TypeScript assigns a type:
// 1.Explicit means directly or well-explained
// 2.Implicit means indirectly or impiles
// create a firstName variable, string type uisng Explicit type
const firstName: string = 'Awais';
console.log(firstName);

// create a lastName variable, string type using implicit type
//let lastName = 'Ahmad';
// array in typescript
const names: readonly string[] = [];
//names.push('Awais Ahmad');
console.log(names);

interface User {
  name: string;
  id: number;
}
const user: User = {
  name: 'awiasahmad',
  id: 1.7,
};
console.log(user);
