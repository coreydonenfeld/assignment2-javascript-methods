/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

/**
 * My Map.
 * 
 * myMap executes a passed callback function on each of the array elements.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map MDN info on native implementation.
 * 
 * @param {Function} callbackFn A function that is executed on each element in the array.
 * @returns {Array} An array of elements where each element is the return value of the callback function.
 */
Array.prototype.myMap = function(callbackFn) {
    // Check that callbackFn is a function.
    if (typeof callbackFn !== 'function') {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    let mappedArray = [];

    for (let i = 0; i < this.length; i++) {
        mappedArray[i] = callbackFn(this[i]);
    }

    return mappedArray;
};

/**
 * My Filter.
 * 
 * myFilter filters the array based on if the element returns true for the passed callback function.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter MDN info on native implementation.
 * 
 * @param {Function} callbackFn The callback function to filter with.
 * @returns {Array} An array of elements that returned true for the callback function.
 */
Array.prototype.myFilter = function(callbackFn) {
    // Check that callbackFn is a function.
    if (typeof callbackFn !== 'function') {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    let filteredArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            filteredArray.push(this[i]);
        }
    }

    return filteredArray;
};

/**
 * My Some.
 * 
 * mySome checks if at least one element in the array returns true for the passed callback function.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some MDN info on native implementation.
 * 
 * @param {Function} callbackFn 
 * @returns {Boolean} True if at least one element in the array returns true for the callback function. False otherwise.
 */
Array.prototype.mySome = function(callbackFn) {
    // Check that callbackFn is a function.
    if (typeof callbackFn !== 'function') {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            return true;
        }
    }

    return false;
};

/**
 * My Every.
 * 
 * myEvery checks that all the elements in the array return true for the passed callback function.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Every MDN info on native implementation.
 * 
 * @param {Function} callbackFn 
 * @returns {Boolean} True if at least one element in the array returns true for the callback function. False otherwise.
 */
Array.prototype.myEvery = function(callbackFn) {
    // Check that callbackFn is a function.
    if (typeof callbackFn !== 'function') {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i])) {
            return false;
        }
    }

    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};