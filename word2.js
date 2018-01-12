
var Letter = require("./letter2.js");

var Word = function(word) {
  this.word = word;

  this.display = "";

  this.letterObjArray = [];
  // this.name = name;
  // this.role = role;
  this.splitWord = function(){
  	console.log(word);
  	return this.word.split("");
  	// console.log(letterArray);
  }



// create a new Letter object for each letter in the word
  this.newLetters = function(num){

  	//split up the word into an array of the letters
  	var letterArray = this.splitWord();
  	// console.log(letterArray + " letter array")
  	
  	// console.log(this.letterObjArray) //here its empty
  	
  	for (var i = 0; i < letterArray.length; i++) {

  		// new Letter object with the value of the letter from the split array
  		var letter = new Letter(letterArray[i]);

//comment this out:
  		// console.log(i + " " + letter.value);

  		// push the new Letter object into an array for later use
  		this.letterObjArray.push(letter);

  		// this.display += letter.show() + " "



  	}
  	// initially show the underscores
  	this.showWord();
  	// console.log("display " + this.display)

  }

  this.showWord = function(){
  	//empty out the display
  	this.display = "";

  	// got through each Letter object and add .show() --> 
  	//so it will add the dash or the letter if guessed
  	for (var i = 0; i < this.letterObjArray.length; i++) {
  		this.display += this.letterObjArray[i].show() + " "
  	}

  	// output to the screen
  	console.log("\n" + this.display + "\n");
  }
}


// var rewind = new Word("rewind");
// rewind.newLetters();



module.exports = Word;
