var displayName = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(greeting + '' + names.join(' ') + '!');
};
displayName('Hi,', 'Awais', 'Ahmad', 'Sandhu');
