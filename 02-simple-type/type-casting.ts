const x : unknown = "string";
console.log((x as string).length);
// using  <> , work same "as"
console.log(<string>x);