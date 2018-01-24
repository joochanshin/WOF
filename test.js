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
	}
	else if(value>= 100){
		console.log("It is greater than or equal to 100");
	}
	else{
		console.log("JACKPOT");
	}
	console.log("Pick a category: Easy, Medium, Hard");
	//Pretending the input is "Easy"
	var __cat__ = "Easy"//document.getElementById
	__guess__(__cat__);
}

function __guess__(word){
	var score = 0;
	var index = 0;
	var state = "";
	var guesses = 0;
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

}

__game__(7);