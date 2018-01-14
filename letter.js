

var Letter = function(char){

	this.value = char;

	//guessed starts out as false
	this.guessed = false;

}

// using a prototype
Letter.prototype.show = function() {
		if (this.guessed){
			return this.value;	
		}

		else{
			return "_";
		}
	}

module.exports = Letter;