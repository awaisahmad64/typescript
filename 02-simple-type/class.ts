interface User {
  name: string;
  id: number;
}

class Users {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const person: User = new Users('Awais', 1);
console.log(person);
