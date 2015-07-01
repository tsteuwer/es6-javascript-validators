/**
 * The default export. Its an object with all utilities.
 * @public
 * @type {Object}
 */
export default {
	isStr: isStr,
	isArr: isArr,
	isNum: isNum,
	isObj: isObj,
	isFnc: isFnc,
	validStr: validStr,
	validArr: validArr,
	validNum: validNum,
	validObj: validObj,
	isNullOrUndefined: isNullOrUndefined
};

/**
 * Checks if the variable is null or undefined
 * @public
 * @type {Function}
 * @param {Mixed} v The variable to test.
 * @return {Boolean}
 */
export function isNullOrUndefined(v) {
	return typeof v === 'undefined' || v === null;
}

/**
 * Checks if the variable is a string.
 * @public
 * @type {Function}
 * @param {String} s The variable to test.
 * @return {Boolean}
 */
export function isString(s) {
	return typeof s === 'string';
}

/**
 * Checks if the variable is an array.
 * @public
 * @type {Function}
 * @param {Array} a The variable to test.
 * @return {Boolean}
 */
export function isArr(a) {
	return !isNullOrUndefined(a) && a.constructor === Array;
}

/**
 * Checks if the variable is a number.
 * @public
 * @type {Function}
 * @param {Number} n The variable to test.
 * @return {Boolean}
 */
export function isNum(n) {
	return typeof n === 'number';
}

/**
 * Checks if the variable is an object.
 * @public
 * @type {Function}
 * @param {Object} o The variable to test.
 * @return {Boolean}
 */
export function isObj(o) {
	return !isArr(o) && typeof obj === 'object';
}

/**
 * Checks if the variable is a function.
 * @public
 * @type {Function}
 * @param {Function} f The variable to test.
 * @return {Boolean}
 */
export function isFnc(f) {
	return typeof f === 'function';
}

/**
 * Checks if the variable is a string and that it's not empty.
 * @public
 * @type {Function}
 * @param {String} s The variable to test.
 * @return {Boolean}
 */
export function validStr(s) {
	return isStr(s) && !!s.length;
}

/**
 * Checks if the variable is an array and that it's not empty. Only goes one level deep.
 * @public
 * @type {Function}
 * @param {Array} a The variable to test.
 * @return {Boolean}
 */
export function validArr(a) {
	return isArr(a) && !!a.length;
}

/**
 * Checks if the variable is a number and that is greater than 0.
 * @public
 * @type {Function}
 * @param {Number} n The variable to test.
 * @return {Boolean}
 */
export function validNum(n) {
	return isNum(n) && n > 0;
}

/**
 * Checks if the variable is an object and that it's not an empty object.
 * @public
 * @type {Function}
 * @param {Object} o The variable to test.
 * @return {Boolean}
 */
export function validObj(o) {
	var i;

	if (!isArr(o)) {
		return false;
	}

	for (i in obj) {
		return true;
	}

	return false;
}

