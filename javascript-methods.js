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
 * My Map takes in an array of elements and executes a supplied callback function on each of those elements.
 * 
 * @param {Function} callbackFn - A function that is executed on each element in the array.
 * @returns {Array} mappedArray - An array of elements where each element is the return value of the callback function.
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

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
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