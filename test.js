var easy = ["THINK", "WORD", "HELLO", "PHONE", "CHAIR", "TABLE"];
var medium = ["COMPUTER", "REACTION", "TACHYCARDIA", "MITOCHONDRIA", "ACADEMY", "EVERYTHING"];
var hard = ["BIG RED DOG", "UNDER THE SEA", "SCRATCH YOUR HEAD", "DROP YOUR PEN", "WHAT IS THE TIME", "MORNING CHALLENGE"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function __game__(value){
	console.log("We are in game function");
	if(value<100){
		console.log("It is less than 100");
	}else if(value>= 100){
		console.log("It is greater than or equal to 100");
	}else{
		console.log("JACKPOT");
	}
	console.log("Pick a category: Easy, Medium, Hard");
	//Pretending the input is "Easy"
	var __cat__ = "Hard"//document.getElementById
	__guess__(__cat__);
}

function __guess__(word){
	var score = 0;
	var state = "";
	if(word==="Easy"){
		console.log("You chose the Easy cetegory");
		state = easy[getRandomInt(easy.length)];
		__game2__(state);
	}else if(word==="Medium"){
		console.log("You chose the Medium category");
		state = medium[getRandomInt(medium.length)];
		__game2__(state);
	}else if(word==="Hard"){
		console.log("You chose the Hard category");
		state = hard[getRandomInt(hard.length)];
		__game2__(state);
	}else{
		console.log("Not a category... how did we get here?!");
	}
}

function __game2__(state){
	console.log(state);
	var temp = state;
	var guesses = 0;
	var g_word = "";
	var _i_ = "";
	for(let i = 0; i < state.length; i++){
		g_word += "_";
	}
	while(guesses<5){
		var index = 0;
		var bool = false;
		console.log(g_word);
		_i_ = prompt("Guess a letter");
		for(let i = 0; i < state.length; i++){
			console.log(_i_.toUpperCase(), state[i]);
			if(_i_.toUpperCase() == state[i]){
				bool = true;
				g_word.replaceAt(i, state[i]);
				state.replaceAt(i, "");
				//	add i-- after replaceAt works
			}
		}//	End of forloop
		if(!bool){
			console.log("You are wrong");
			guesses++;
			console.log("Guesses left: " + (5-guesses));
		}
		if(g_word === temp){
			break;
		}
	}//	End of while loop
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

__game__(7);




