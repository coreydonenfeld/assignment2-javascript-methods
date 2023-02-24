require('./javascript-methods.js');

// 
let testArray = [1, 2, 3, 4, 5];
let testArrayWords = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
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
    {
        label: 'myFilter: x < 1',
        native: testArray.filter((x) => x < 1),
        custom: testArray.myFilter((x) => x < 1),
    },
    {
        label: 'myFilter: x > 3',
        native: testArray.filter((x) => x > 3),
        custom: testArray.myFilter((x) => x > 3),
    },
    {
        label: 'myFilter: x * 2 > 3',
        native: testArray.filter((x) => x * 2 > 3),
        custom: testArray.myFilter((x) => x * 2 > 3),
    },
    {
        label: 'myFilter: word.length > 7',
        native: testArrayWords.filter((word) => word.length > 7),
        custom: testArrayWords.myFilter((word) => word.length > 7),
    },
]
testCases.forEach((testCase) => {
    console.log(testCase.label);
    console.log("Native:", testCase.native);
    console.log("Custom:", testCase.custom);
    console.log("Pass:", JSON.stringify(testCase.native) === JSON.stringify(testCase.custom));
    console.log("");
});