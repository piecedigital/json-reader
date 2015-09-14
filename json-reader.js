var object = {
	name: "level1",
	object: {
		name: "level2",
		object: {
			name: "level3",
			object: {
				name: "level4",
				object: {
					name: "level5",
					object: {
						name: "level6"
					}
				}
			}
		}
	}
}

var arr = ["object","object","object","object","object"];

var findWithin = function(obj, num) {
	var data = obj;
	var i;
	for(i = 0; i < arr.length-1; i++) {
		data = data[arr[i]] || {};
	}
	//console.log(data);
	data[arr[i]].finish = true;
	return data;
}

var data = findWithin(object, 4);

console.log("------------reference object-------------: \n", data);
console.log();
console.log("------------original object--------------: \n", JSON.stringify(object));

var name ={};
var fullName = name;
fullName.name = "Darryl Dixon";

console.log(name);