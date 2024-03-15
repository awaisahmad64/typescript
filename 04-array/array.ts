const names: string[] = [];
names[0] = 'Awais Ahmad';
names.push('Tayyab Sandhu');
const data: readonly number[] = [1, 2, 3, 4, 5];
// data.push('Awais');
let head: number = data[0];
//names.push(3); this will make an error 'Argument of type 'number' is not assignable to parameter of type 'string'.'
console.log(head, names);

