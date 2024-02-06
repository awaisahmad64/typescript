function printName(obj: { first: string; last?: string; id?: number }) {
  console.log(` ${obj.first} and ${obj.last} and ${obj.id}`);
}
printName({ first: 'Awais' });
printName({ first: 'Awais', last: 'Ahmad' });
printName({ first: 'Tayyab', last: 'Sandhu', id: 1 });
