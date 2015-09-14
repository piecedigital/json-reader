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
var array = "object/object/object/object/object".split("/");

// this function reads into a given object for a depth of a given distence
var findWithin = function(obj, arr, num) {
	// this assigns a reference variable to the given object
	var data = obj;
	// this assigns a variable to the given array
	var arr = arr;
	// i is set outside of the loop to be access
	// after the loop ends to edit the desired object
	var i;
	for(i = 0; i < num; i++) {
		// this essentially steps deeper into the object referenced and assigns 'data' to it
		data = data[arr[i]] || {};
	}
	// this adds a key 'finish' with a value of 'true' to our desired object
	data.finish = true;
	// returns the object that data is inside
	return data;
}
// calls the function with the necessary arguments
// assigns a variable to our returned data
var returnedData = findWithin(object, array, 5);

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