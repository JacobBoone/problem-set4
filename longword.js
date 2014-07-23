#!/usr/bin/env node


var longestWord = function(str){
	var string = str.split(" ");
	var longest = 0;
	var word = null;

	for (var i = 0; i < string.length; i++) {
		if (longest < string[i].length){
			longest= string[i].length;
			word = string[i];
		}
	}
	return word;	
};


// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

console.log(longestWord('words larger big biggest'))
console.log(longestWord('The Avengers'))