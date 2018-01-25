var easy = ["THINK", "WORD", "HELLO", "PHONE", "CHAIR", "TABLE"];
var medium = ["COMPUTER", "REACTION", "TACHYCARDIA", "MITOCHONDRIA", "ACADEMY", "EVERYTHING"];
var hard = ["BIG RED DOG", "UNDER THE SEA", "SCRATCH YOUR HEAD", "DROP YOUR PEN", "WHAT IS THE TIME", "MORNING CHALLENGE"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
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
	if(value == "jPOT")
		value = randInt(5000, 10000);
	value = parseInt(value);
	value *= __guess__(__cat__);

	console.log("Your points:", value);
}

function __guess__(word){
	var score = 0;
	var state = "";
	if(word==="Easy"){
		console.log("You chose the Easy cetegory");
		state = easy[getRandomInt(easy.length)];
		score = 1 * __game2__(state);
	}else if(word==="Medium"){
		console.log("You chose the Medium category");
		state = medium[getRandomInt(medium.length)];
		score = 2 * __game2__(state);
	}else if(word==="Hard"){
		console.log("You chose the Hard category");
		state = hard[getRandomInt(hard.length)];
		score = 3 * __game2__(state);
	}else{
		console.log("Not a category... how did we get here?!");
	}
	return score;
}

function __game2__(state){
	console.log(state);
	var temp = state;
	var guesses = 0;
	var g_word = "";
	var _i_ = "";
	for(let i = 0; i < state.length; i++){
		if(state[i] == " ")
			g_word += " ";
		else
			g_word += "_";
	}
	while(guesses<5){
		var index = 0;
		var bool = false;
		var pass = false;
		console.log(g_word);
		_i_ = prompt("Guess a letter");
		for(let i = 0; i < state.length; i++){
			//console.log(_i_.toUpperCase(), state[i]);
			if(_i_.toUpperCase() == state[i]){
				bool = true;
				g_word = g_word.replaceAt(i, state[i]);
				state = state.replaceAt(i, "");
				//	add i-- after replaceAt works
			}
		}//	End of forloop
		if(!bool){
			console.log("You are wrong");
			guesses++;
			console.log("Guesses left: " + (5-guesses));
		}
		if(g_word === temp){
			console.log("You finished the game!")
			pass = true;
			break;
		}
	}//	End of while loop
	if(pass)
		return 1;
	else
		return 0;
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//	Working on Canvas

var str = "DAVID IS WeeB";
str = str.toUpperCase();
var index = 0;//	Index for string
var index2 = 0;//	X multiplier
var index2a = 0;//	zeros out X index
var index3 = 0;//	Y index
var index4 = 0;//	Y multiplier

var c=document.getElementById("can");
c.width = 1000;
c.height = 500;
c.style = "position: absolute; top: 50px; left: 200px; border:5px solid blue"
var ctx=c.getContext("2d");

var word = "Hard"
var _y23_ = 0;
var temp = 0;
var counter = 0; //	for testing

if(word === "Easy" || word === "Medium")
	_y23_ = 200;
else if(word === "Hard")
	_y23_ = 100;
else//	In case it doesn't work for some reason
	_y23_ = 0;
temp = _y23_;
var bool = false;
var superBool = true;
for(let y = 0; y < c.height; y+=100){//	let x = 0; x < c.width; x+=50
	for(let x = 0; x < c.width; x+=50){//	let y = 0; y < c.height; y+=100
		if(x===50)
			bool = true;
		else if(x===950)
			bool = false;
		if(str[index] === " "){
			_y23_ += temp;
			index2 = 0;
			index2a = 50;
			index3 = 100;
			index4++;
			bool = false;
			index++;
			console.log("Space", x, y + "(", _y23_, ")");
		}
		else if (isLetter(str[index]) ){
			console.log("Letter", x, y + "(", _y23_, ")");
			bool = true;
			counter++;
			console.log(counter);
		}
		else{
			console.log("line 148");
			bool = false;
		}
		if(superBool && bool && y == _y23_ && x != 0){
			console.log("In draw", x, _y23_, str[index], index);
			ctx.beginPath();
			ctx.lineWidth="10";
			ctx.strokeStyle="blue";
			ctx.rect(x,y,50,100);
			ctx.stroke();
			ctx.fillStyle = "white";
			ctx.fill();
			ctx.fillStyle = "#000";
			ctx.font = "48px serif";
			ctx.fillText(str[index], (55)+(50*index2), 165+(index3*index4));
			if(index < str.length-1){
				index++;
				index2++;
			}
			else{
				bool = false;
				superBool = false;
			}
		}
		else{
			ctx.beginPath();
			ctx.lineWidth="10";
			ctx.strokeStyle="blue";
			ctx.rect(x,y,50,100);
			ctx.stroke();
			ctx.fillStyle = "green";
			ctx.fill();
		}
	}
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}






