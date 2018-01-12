
var Word = require("./word.js");

var Letter = function(num){

	this.wordVal;

	this.char = "";

	this.num = num;
	//guessed starts out as false
	this.guessed = false;

	this.show = function(){
		if (this.guessed){
			console.log(this.char)
		}

		else{
			console.log("_")
		}
	}

	this.displayWord = function(word){

		var wordVal = new Word(word);
		console.log("wordVal " + wordVal)
		
		var letterArray = wordVal.splitWord();

		// console.log("wordVal " + wordVal[0])
		console.log("num " + this.num);
		console.log(letterArray)
		for (var i = 0; i < letterArray.length; i++) {
			if (this.num == i){
				this.char = letterArray[i];
				break;
			}
		}
		console.log("char " + this.char);

		console.log("this.show")
		this.show();

	}

}

var rewind = new Letter(0);
rewind.displayWord("rewind");

module.exports = Letter;