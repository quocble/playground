// // Javascript tutorial



// public Do1 {
// 	void do1(b, c) {
	
// 	}

// 	void do2(a, x) {
	
// 	}	


// 	void start() {
// 		do1(b, c);
// 	}
// };





// declarion
function do1(b, c) {
	console.log("do 1 start");
	c();
	console.log("do 1 end");
}

// do1(); - execution

// declaration
function do2( a  , x) {
	console.log("do2 start");

	var c = function() {
		console.log("do c");
	};

	do1(a, c);

	x();

	console.log("do2 end");
}

// execution
do2("ok", function () {  // anonymous
	// do another thig
	console.log("do ??");
});




// question is...   
// what will print what and when.

// console.log("do2 start");
// console.log("do 1 start");
// console.log("do c");
// console.log("do 1 end");
// console.log("do ??");
// console.log("do2 end");



