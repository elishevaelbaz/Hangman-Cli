

var Letter = function(char){

	this.value = char;

	// this.num = num;
	//guessed starts out as false
	this.guessed = false;

	this.show = function(){
		if (this.guessed){

			return this.value;
			
		}

		else{

			return "_";
			
		}
	}
}

module.exports = Letter;