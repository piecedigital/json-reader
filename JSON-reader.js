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

// this is an array of all of the internal objects we want to read into
var array = "/object/object/object/object/object".split("/");
// because there is a slash at the beginnig of our newly created array
// array will have an empty string at the first index.
// array.shift() will remove this empty cell and leave our array obstruction free
array.shift()

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

// this is our callback to modify data within
var callback = function(data) {
	data.finish = true;
}
// calls the function with the necessary arguments
// assigns a variable to our returned data
var returnedData = findWithin(object, array, 5, callback);

// console logs our data for visibility
console.log("-----------------array-------------------: \n", array);
console.log();
console.log("------------reference object-------------: \n", returnedData);
console.log();
console.log("------------original object--------------: \n", JSON.stringify(object));

// created by me :)
var creator ={};
var info = creator;
info.name = "Darryl Dixon";
info.twitter = "@PieceDigital";
info.website = "piecedigital.github.io";
info.linkedin = "linkedin.com/in/pdstudios";

console.log(creator);
