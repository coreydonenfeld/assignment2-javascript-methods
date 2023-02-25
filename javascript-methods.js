/**
 * My Map.
 * 
 * myMap executes a passed callback function on each of the array elements.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map MDN Docs on Native Implementation}
 * 
 * @param {Function} callbackFn The callback function to execute on each element.
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
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter MDN Docs on Native Implementation}
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
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some MDN Docs on Native Implementation}
 * 
 * @param {Function} callbackFn The callback function to check with.
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
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Every MDN Docs on Native Implementation}
 * 
 * @param {Function} callbackFn The callback function to check with.
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

/**
 * My Reduce.
 * 
 * myReduce accumulates the elements in the array based on the passed callback function.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce MDN Docs on Native Implementation}
 * 
 * @param {Function} callbackFn The callback function takes two parameters, the accumulator and the current element.
 * @param {*} initialValue The initial value of the accumulator. If not provided, the first element in the array will be used.
 * @returns {*} The final value of the accumulator.
 */
Array.prototype.myReduce = function(callbackFn, initialValue = 0) {
    // Check that callbackFn is a function.
    if (typeof callbackFn !== 'function') {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    let startI = 1;
    let accumulator = this[0];

    if (initialValue) {
        startI = 0;
        accumulator = initialValue;
    }

    for (let i = startI; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i]);
    }

    return accumulator;
};

/**
 * My Includes.
 * 
 * myIncludes checks if the array includes the passed search element.
 * 
 * @requires Array.prototype.mySome
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Includes MDN Docs on Native Implementation}
 * 
 * @param {*} searchElement The element to search for.
 * @returns {Boolean} True if the element is found, false otherwise.
 */
Array.prototype.myIncludes = function(searchElement) {
    return this.mySome((element) => element === searchElement);
};

/**
 * My Index Of.
 * 
 * myIndexOf returns the index of the passed search element.
 * 
 * @requires Array.prototype.myIncludes
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf MDN Docs on Native Implementation}
 * 
 * @param {*} searchElement The element to search for.
 * @returns {Number} The index of the first occurance of the search element. -1 if the element is not found.
 */
Array.prototype.myIndexOf = function(searchElement) {
    if (!this.myIncludes(searchElement)) {
        return -1;
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }
};

/**
 * My Last Index Of.
 * 
 * myLastIndexOf returns the last index of the passed search element.
 * 
 * @requires Array.prototype.myIncludes
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf MDN Docs on Native Implementation}
 * 
 * @param {*} searchElement The element to search for.
 * @returns The index of the last occurance of the search element. -1 if the element is not found.
 */
Array.prototype.myLastIndexOf = function(searchElement) {
    if (!this.myIncludes(searchElement)) {
        return -1;
    }

    let lastIndex = -1;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
            lastIndex = i;
        }
    }

    return lastIndex;
};

/**
 * My Keys.
 *  
 * myKeys returns an array of the object's keys.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys MDN Docs on Native Implementation}
 * 
 * @param {Object} object The object to get the keys from.
 * @returns An array of the object's keys.
 */
Object.myKeys = function(object) {
    // Check that object is an object.
    if (typeof object !== 'object') {
        throw new TypeError(`${object} is not an object`);
    }

    let keys = [];

    for (const key in object) {
        // Ignore inherited properties (like our templated functions for Array).
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    return keys;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};