require('./javascript-methods.js');

// Test cases.
let testArray = [1, 2, 3, 4, 5];
let testArrayWords = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let testCasesGroups = [
    {
        group: 'myMap',
        cases: [
            {
                label: 'x + 1',
                native: testArray.map((x) => x + 1),
                custom: testArray.myMap((x) => x + 1),
            },
            {
                label: 'x * 2',
                native: testArray.map((x) => x * 2),
                custom: testArray.myMap((x) => x * 2),
            },
        ],
    },
    {
        group: 'myFilter',
        cases: [
            {
                label: 'x < 1',
                native: testArray.filter((x) => x < 1),
                custom: testArray.myFilter((x) => x < 1),
            },
            {
                label: 'x > 3',
                native: testArray.filter((x) => x > 3),
                custom: testArray.myFilter((x) => x > 3),
            },
            {
                label: 'x * 2 > 3',
                native: testArray.filter((x) => x * 2 > 3),
                custom: testArray.myFilter((x) => x * 2 > 3),
            },
            {
                label: 'word.length > 7',
                native: testArrayWords.filter((word) => word.length > 7),
                custom: testArrayWords.myFilter((word) => word.length > 7),
            },
        ],
    },
    {
        group: 'mySome',
        cases: [
            {
                label: 'x > 3',
                native: testArray.some((x) => x > 3),
                custom: testArray.mySome((x) => x > 3),
            },
            {
                label: 'x == 5',
                native: testArray.some((x) => x == 5),
                custom: testArray.mySome((x) => x == 5),
            },
        ]
    },
    {
        group: 'myEvery',
        cases: [
            {
                label: 'x > 3',
                native: testArray.every((x) => x > 3),
                custom: testArray.myEvery((x) => x > 3),
            },
            {
                label: 'x < 6',
                native: testArray.every((x) => x < 6),
                custom: testArray.myEvery((x) => x < 6),
            },
            {
                label: 'x !== 0',
                native: testArray.every((x) => x !== 0),
                custom: testArray.myEvery((x) => x !== 0),
            }
        ]
    },
    {
        group: 'myReduce',
        cases: [
            {
                label: 'x + y',
                native: testArray.reduce((x, y) => x + y),
                custom: testArray.myReduce((x, y) => x + y),
            },
            {
                label: 'x * y',
                native: testArray.reduce((x, y) => x * y),
                custom: testArray.myReduce((x, y) => x * y),
            },
            {
                label: 'x * y, 10',
                native: testArray.reduce((x, y) => x * y, 10),
                custom: testArray.myReduce((x, y) => x * y, 10),
            },
            {
                label: 'x + y, 40',
                native: testArray.reduce((x, y) => x + y, 40),
                custom: testArray.myReduce((x, y) => x + y, 40),
            },
            {
                label: 'x',
                native: testArray.reduce((x) => x),
                custom: testArray.myReduce((x) => x),
            }
        ],
    },
    {
        group: 'myIncludes',
        cases: [
            {
                label: '1',
                native: testArray.includes(1),
                custom: testArray.myIncludes(1),
            },
            {
                label: '5',
                native: testArray.includes(5),
                custom: testArray.myIncludes(5),
            },
            {
                label: '6',
                native: testArray.includes(6),
                custom: testArray.myIncludes(6),
            },
        ],
    },
    {
        group: 'myIndexOf',
        cases: [
            {
                label: '1',
                native: testArray.indexOf(1),
                custom: testArray.myIndexOf(1),
            },
            {
                label: '5',
                native: testArray.indexOf(5),
                custom: testArray.myIndexOf(5),
            },
            {
                label: '6',
                native: testArray.indexOf(6),
                custom: testArray.myIndexOf(6),
            },
            {
                label: '-1',
                native: testArray.indexOf(-1),
                custom: testArray.myIndexOf(-1),
            }
        ],
    }
];

// Log test results.
testCasesRan = 0;
testCasesPassed = 0;
testCasesGroups.forEach((testCaseGroup) => {
    console.log(`Testing ${testCaseGroup.group}`);
    testCaseGroup.cases.forEach((testCase) => {
        passed = JSON.stringify(testCase.native) === JSON.stringify(testCase.custom);
        testCasesRan += 1;
        testCasesPassed += passed ? 1 : 0;
        console.log(`  ${testCase.label}`);
        console.log("  Native:", testCase.native);
        console.log("  Custom:", testCase.custom);
        console.log("  Pass:", passed);
        console.log("");
    });
});
console.log("Summary");
console.log(`  Ran ${testCasesRan} test cases.`);
console.log(`  Passed ${testCasesPassed} test cases.`);