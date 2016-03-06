// Refactor the carlike function in a way
// that allows you to use the method calling 
// syntax with "dot access" as we do below.

function extend(obj, props) {
    for (var prop in props) {
        if (props.hasOwnProperty(prop)) {
            obj[prop] = props[prop];
        }
    }
}

var Car = function(pos) {
	var obj = {loc: pos};
	extend(obj, Car.methods);
	return obj;
};

Car.methods = {
	move : function() {
		this.loc++;
	}
};

/////
// Here we want to call move with "dot access"
var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();
