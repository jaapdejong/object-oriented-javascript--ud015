// Refactor the carlike function in a way
// that allows you to use the method calling 
// syntax with "dot access" as we do below.

var carlike = function(obj, loc) {
	obj.loc = loc;
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};



/////
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();
