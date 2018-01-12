
var letterArray;
// Constructor function for creating Word objects


var Word = function(word) {
  this.word = word;
  // this.name = name;
  // this.role = role;
  this.splitWord = function(){
  	console.log(word);
  	return this.word.split("");
  	// console.log(letterArray);
  }
}
  // var elisheva = new Word("elisheva");

 // var letterArray =  elisheva.splitWord()

module.exports = Word;


//   // Prints out slightly different information about a cast member based on their gender
//   this.readProfile = function() {
//     var title = "";

//     if (this.gender === "female") {
//       title = "actress";
//     }
//     else {
//       title = "actor";
//     }

//     console.log(this.name + ": An " + title + " playing the role of " + this.role + ".");
//   };
// };

// // Exporting our CastMember constructor. We will require it in movie.js
// module.exports = CastMember;