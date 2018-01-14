
var Letter = require("./letter.js");

var Word = function(word) {
  this.word = word;
  this.display = "";
  this.letterObjArray = [];
  
  this.splitWord = function(){
  	// console.log(word);
  	return this.word.split("");
  }

// create a new Letter object for each letter in the word
  this.newLetters = function(num){

  	//split up the word into an array of the letters
  	var letterArray = this.splitWord();
  	// for each letter in the letterArray (ie: each letter in the word)  	
  	for (var i = 0; i < letterArray.length; i++) {

  		// create new Letter object with the value of the letter from the split array
  		var letter = new Letter(letterArray[i]);

  		// push the new Letter object into an array for later use
  		this.letterObjArray.push(letter);

  	}

  	// after creating all the Letter objects,
  	//show the word (as underscores)
  	this.showWord();
  }

}

// using a prototype instead of method within the constructor
Word.prototype.showWord = function(){
  	//empty out the display
  	this.display = "";

  	// go through each Letter object, using .show() --> 
  	//add (to this.display) the dash or the letter if guessed
  	for (var i = 0; i < this.letterObjArray.length; i++) {
  		this.display += this.letterObjArray[i].show() + " "
  	}

  	// output to the screen
  	console.log("\n" + this.display + "\n");
  }

module.exports = Word;