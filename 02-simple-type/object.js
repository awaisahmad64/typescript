const testObject = {};
testObject.beforeTax = 345;
testObject.GST = 35;
testObject.PSt = 35;
testObject.sum = testObject.beforeTax + testObject.GST + testObject.PSt;
console.log(testObject);
