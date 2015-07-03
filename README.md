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

Well, lets collectively stop that. Lets use simple functions to do that for us! [es6-javascript-validators](https://github.com/tsteuwer/es6-javascript-validators) is a collection of functions which will do all of this for you and keep your code consistent and clean.

## Available Methods ##
- Simple variable checkers
-- isNullOrUndefined: Is it null or undefined?
-- isStr: Is it a string?
-- isArr: Is it an array?
-- isNum: Is it a number?
-- isObj: Is it an object?
-- isFnc: Is it a function?

- Validation functions
-- validStr: Is it a string and not an empty one?
-- validArr: Is it an array and not an empty one?
-- validNum: Is it a number and greater than 0?
-- validObj: Is it an object and not an empty one?

- Additional
-- Or, if you want all of them, just export the default object which contains all of the above.

## Import specific functions ##
```js

	import { isStr, isObj } from 'your/path/to/module.js';

	console.log(isStr(''), isStr([]), isStr(null), isStr(0), isStr(), isStr({})); // logs: true, false, false, false, false, false
	console.log(isObj(''), isObj([]), isObj(null), isObj(0), isObj(), isObj({})); // logs: false, false, false, false, false, true
```

## Import all utils ##
```js

	import Util from 'your/path/to/module.js';

	console.log(Util.isStr('')); // true
	console.log(Util.validStr('')); // false

	console.log(Util.isArr([])); // true
	console.log(Util.validArr([1, 2, 3])); // true

	//.. and so on
```
