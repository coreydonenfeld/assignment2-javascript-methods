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
    }
];

// Log test results.
testCasesGroups.forEach((testCaseGroup) => {
    console.log(`Testing ${testCaseGroup.group}`);
    testCaseGroup.cases.forEach((testCase) => {
        console.log(`  ${testCase.label}`);
        console.log("  Native:", testCase.native);
        console.log("  Custom:", testCase.custom);
        console.log("  Pass:", JSON.stringify(testCase.native) === JSON.stringify(testCase.custom));
        console.log("");
    });
});