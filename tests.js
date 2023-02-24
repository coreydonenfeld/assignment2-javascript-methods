require('./javascript-methods.js');

// 
let testArray = [1, 2, 3, 4, 5];
let testCases = [
    {
        label: 'myMap: x + 1',
        native: testArray.map((x) => x + 1),
        custom: testArray.myMap((x) => x + 1),
    },
    {
        label: 'myMap: x * 2',
        native: testArray.map((x) => x * 2),
        custom: testArray.myMap((x) => x * 2),
    },
]
testCases.forEach((testCase) => {
    console.log(testCase.label);
    console.log("Native:", testCase.native);
    console.log("Custom:", testCase.custom);
    console.log("Pass:", JSON.stringify(testCase.native) === JSON.stringify(testCase.custom));
});