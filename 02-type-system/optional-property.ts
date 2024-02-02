function printName(obj: { first: string; last?: string }) {
  console.log(` ${obj.first} and ${obj.last}`);
}
printName({ first: 'Awais' });
printName({ first: 'Awais', last: 'Ahmad' });


