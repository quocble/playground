


var a = [1,2,3,4,5];
var b = { 
	"quoc" : "480-544-4370",
	"huy"  : "555",
	"aaa"  : "aaaa"
};


console.log(b["quoc"]);
console.log(b.huy);

var ob = { 
	"name" : "quoc",
	"jump"	: function() {
		console.log(this.name + " JUMPS");
	}
};


console.log("obj is " + ob.name);
ob.jump();


// $("#id").click(function(e) {
//		// do something
// });
