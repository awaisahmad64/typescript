function printName(obj) {
    console.log(" ".concat(obj.first, " and ").concat(obj.last, " and ").concat(obj.id));
}
printName({ first: 'Awais' });
printName({ first: 'Awais', last: 'Ahmad' });
printName({ first: 'Tayyab', last: 'Sandhu', id: 1 });
