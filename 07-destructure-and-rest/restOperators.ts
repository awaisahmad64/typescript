const displayName = (greeting: string, ...names: string[]): void => {
  console.log(greeting + '' + names.join(' ') + '!');
};
displayName('Hi,', 'Awais', 'Ahmad', 'Sandhu');
