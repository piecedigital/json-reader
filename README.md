#JSON Reader

I wrote this algorithm to read JSON objects of known, documented directories.
The idea behind it is that you could use a given path from a URL (e.g., "/some/cool/url/path"), turn it into an array (e.g., ["some", "cool", "url", "path"]), and read or modify an object within a given object.

This has been done before, I'm certain, but I was glad that I came up with it on my own. :D

---

## Let's dive into what it does.

As your read through the following, do note that the comments to much of the explaining.

Now consider the following object:
```javascript
// this is the object we want to read into
var object = {
	"name": "level1",
	"object": {
		"name": "level2",
		"object": {
			"name": "level3",
			"object": {
				"name": "level4",
				"object": {
					"name": "level5",
					"object": {
						"name": "level6"
					}
				}
			}
		}
	}
}
```
Imagine this is an object in your database and it represents your file structure.

Now consider the following string to array:
```js
// this is an array of all of the internal objects we want to read into
var array = "/object/object/object/object/object".split("/");
// because there is a slash at the beginnig of our newly created array
// array will have an empty string at the first index.
// array.shift() will remove this empty cell and leave our array obstruction free
array.shift()
```
Imagine this is a URL of your website. You want to use this URL to write to your object.

But how would you do that dynamically without hard-coding in the operation?

Now consider the following function:
```js
// this function reads into a given object for a depth of a given distence
var findWithin = function(obj, arr, num, cb) {
	// this assigns a reference variable to the given object
	var data = obj;
	// this assigns a variable to the given array
	if(typeof arr === "object") {
	  arr = arr;
	} else {
    arr = arr.split("/");
    if(!arr[0]) {
      arr.shift();
    }
	}
	num = num || arr.length-1;
	for(i = 0; i < num; i++) {
		// this essentially steps deeper into the object referenced and assigns 'data' to it
		data = data[arr[i]] || data;
	}
	// this this uses are callback provided.
	// here we pass 'data' as our argument to it so that it can modify the data as needed
	cb(data);
	// returns the object that data is inside
	return data;
}
```
And this is how we'll write to the object. So how would you use it? I'll explain it a little deeper:
```js
var findWithin = function(Object, Array, Number, Callback) {...}
// Object - this is the object we want to read/write to, like the object we have at the top
// Array - this will carry the keys of the objects within Object that we want to read/write
// ... this will likely be a URL turned into this array
// ... either an array or URL string can be passed, but if it is a string it has to be formatted like a URL (e.g., "/path/to/object", "keys/of/object"). Strings will be converted to an array
// Number - currently this is the number to go to within the array, ergo into the object, to read/write
// ... either a number or null must be provided. If null is provided the number will then tbe the length of the array (-1, of course)
// Callback - this is the callback we'll pass. This call back will perform the desired operation
// ... at the desired location in the object
```
This is an example of a callback
```js
// this is our callback to modify data within
// in the function 'findWithin' the object to modify will be passed as an argument.
// That data will be used as out argument 'data' here
var callback = function(data) {
	data.finish = true;
}
```
Now we can finally call 'findWithin' and pass out callback
```js
// calls the function with the necessary arguments
// assigns a variable to our returned data
var returnedData = findWithin(object, array, null, callback);
```
the variable `returnedData` will be equal to the modified object within our object.
These console logs will bring clarity.
```ja
// console logs our data for visibility
// This shows the arry passed
console.log("-----------------array-------------------: \n", array);
console.log();
// This shows the returnedData
console.log("------------reference object-------------: \n", returnedData);
console.log();
// This shows the full object, with it's now modified data
console.log("------------original object--------------: \n", JSON.stringify(object));
```

Credits
```js
// created by me :)
var creator ={};
var info = creator;
info.name = "Darryl Dixon";
info.twitter = "@PieceDigital";
info.website = "http://piecedigital.github.io";
info.linkedin = "http://linkedin.com/in/pdstudios";

console.log(creator);
```

# Thanks for viewing! :)
### Checkout my links below

[Twitter](http://twitter.com/PieceDigital) | [Github](piecedigital.github.io) | [LinkedIn](linkedin.com/in/pdstudios)
