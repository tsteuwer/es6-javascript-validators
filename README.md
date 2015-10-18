# es6-javascript-validators #

Stop for a second. Do you see this a lot in your code?:

```js
	if (typeof var1 === 'string' && var1.length > 0) {
		// other code here...
	}
```

I see it all the time -- and in tons of places too. Or, my favorite:

```js
	if (typeof var2 === 'object' && var2 !== null) {
		// but what if it's an empty object?
	}
```

How much smaller would our JavaScript files be if we didn't do this all the time? Well, lets collectively stop that. Lets use simple functions to do that for us! [es6-javascript-validators](https://github.com/tsteuwer/es6-javascript-validators) is a collection of functions which will do all of this for you and keep your code consistent and clean.

## Installation ##

- Bower: `bower install es6-javascript-validators`
- NPM: `npm install --save es6-javascript-validators`

## Available Functions ##
- isNullOrUndefined: Is it null or undefined?
- isStr: Is it a string?
- isArr: Is it an array?
- isNum: Is it a number?
- isObj: Is it an object?
- isFnc: Is it a function?
- validStr: Is it a string and not an empty one?
- validArr: Is it an array and not an empty one?
- validNum: Is it a number and greater than 0?
- validObj: Is it an object and not an empty one?

## Import specific functions ##
```js

	import { isStr, isObj } from 'your/path/to/module.js';

	console.log(isStr('')); // true
	console.log(isStr([])); // false
	console.log(isStr(null)); // false
	console.log(isStr(0)); // false

	console.log(isObj('')); // false
	console.log(isObj([])); // false
	console.log(isObj(null)); // false
	console.log(isObj({})); // true
```

## Import all utils ##
```js

	import * from 'your/path/to/module.js';

	console.log(isObj({})); // true
	console.log(validObj({})); // false
	console.log(validObj({ a:1, b:2 })); // true

	console.log(isStr('')); // true
	console.log(validStr('')); // false

	console.log(isArr([])); // true
	console.log(validArr([1, 2, 3])); // true

	//.. and so on
```
