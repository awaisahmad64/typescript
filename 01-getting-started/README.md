#Command to run this code is:

npx tsc app.js

node app.js

Output:
Awais Ahmad

But you can see an error :

'Cannot redeclare block-scoped variable 'fullName' '.

we will discuss in next lecture

```
export {} // Solutions: this line of code tell typescript is available in sperate module that module nmae is not mention but you can say anonymous module so this module is sperate from all other.
this index.ts will run by node index.ts but without :number
how to compile or transpil typescritp into javascript let see 
if you install typescript globally you just put a command in your terminal 
tsc index.ts
but we install it as locally so for that we use
npx tsc index.ts
we build typescript and run javascript
:number is a typenotation we are defining 'a' type
infer: deduce or conclude (something) from evidence and reasoning rather than from explicit statements.
function addNumber(a:number, b:number){
    return a+b;
}
console.log('a and b sum is : ', addNumber(2,3));
```