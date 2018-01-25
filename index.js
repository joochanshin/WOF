var arr = [1,2,3245,5332,534,243,5323,4545,9];

function __highest__(arr){
	var highest = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] > highest){
			highest = arr[i];
		}
	}
	return highest;
}

console.log(__highest__(arr));


console.log("Hello");

function __open__(){
	document.getElementsByClassName("left_curtain")[0].style.animation = "open_l 5s ease";
	document.getElementsByClassName("right_curtain")[0].style.animation = "open_r 5s ease";
	document.querySelector(".header").style.animation = "__disp__ 3s ease";
	document.querySelector(".click_me").style.animation = "__disp__ 3s ease";
	document.querySelector("#button").style.display = "none";
	setTimeout(__s1__, 2500);
}

function __s1__ (){
	console.log("In __s1__");
	document.getElementsByClassName("left_curtain")[0].style.marginLeft = "-900px";
	document.getElementsByClassName("right_curtain")[0].style.marginLeft = "-5000px";
	document.querySelector(".header").style.display = "none";
	document.querySelector(".click_me").style.display = "none";
	//document.querySelector("#wheel").style.animation = "__fadeIn__ 1s ease forwards";
	setTimeout(function(){
		document.querySelector("#wheel").style.animation = "flyin 1s ease forwards";
		document.querySelector("#wheel").style.opacity = "1.0";
	}, 1000);
	document.querySelector("#button").style.display = "block";
	document.querySelector("#button").style.animation = "__fadeIn__ 1s ease";
}

function __r__(){
	console.log("In __r__");
	document.querySelector(".wheel").style.animation = "__rotate__ 5s ease";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function rand(min, max) {
  return Math.random() * (max-min) + min;
}


// function __test__(){
// 	console.log('whatever')
	
// 	document.querySelector(".wheel").style.transform = "rotate(" + (deg) + "deg)";
// 	setTimeout(__randomSpin__, 1000);
// }

var color = ['#A53812','#0042FF','#8D15A8','#FFF700','#A81530','#00FF5D', "#1D1C1C", "#f67"];
var label = ['10', '200', '50', '100', '5', '500', '0', "jPOT"];
var slices = color.length;
var sliceDeg = 360/slices;
var deg = rand(0, 360);
var speed = 0;
var slowDownRand = 0;
var ctx = canvas.getContext('2d');
var width = canvas.width; // size
var center = width/2;      // center
var isStopped = false;
var lock = false;

function deg2rad(deg) {
  return deg * Math.PI/180;
}

function drawSlice(deg, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(center, center);
  ctx.arc(center, center, width/2, deg2rad(deg), deg2rad(deg+sliceDeg));
  ctx.lineTo(center, center);
  ctx.fill();
}

function drawText(deg, text) {
  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(deg2rad(deg));
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText(text, 130, 10);
  ctx.restore();
}

function drawImg() {
  ctx.clearRect(0, 0, width, width);
  for(var i=0; i<slices; i++){
    drawSlice(deg, color[i]);
    drawText(deg+sliceDeg/2, label[i]);
    deg += sliceDeg;
  }
}

(function anim() {
  deg += speed;
  deg %= 360;

  // Increment speed
  if(!isStopped && speed<3){
    speed = speed+1 * 0.1;
  }
  // Decrement Speed
  if(isStopped){
    if(!lock){
      lock = true;
      slowDownRand = rand(0.990, 0.998);
    } 
    speed = speed>0.2 ? speed*=slowDownRand : 0;
  }
  // Stopped!
  if(lock && !speed){
    var ai = Math.floor(((360 - deg - 90) % 360) / sliceDeg); // deg 2 Array Index
    ai = (slices+ai)%slices; // Fix negative index
    alert("You got:\n"+ label[ai] ); // Get Array Item from end Degree
    document.getElementById("wheel").style.animation = "open_l 3s ease forwards";
    document.getElementById("button").style.animation = "open_r 3s ease forwards";
    setTimeout(function(){__game__(label[ai])}, 1500);
    return 0;
  }
  //for game later
  drawImg();
  window.requestAnimationFrame( anim );
}());

document.getElementById("button").addEventListener("mousedown", function(){
  isStopped = true;
}, false);


//	Editing this
var easy = ["THINK", "WORD", "HELLO", "PHONE", "CHAIR", "TABLE"];
var medium = ["COMPUTER", "REACTION", "TACHYCARDIA", "MITOCHONDRIA", "ACADEMY", "EVERYTHING"];
var hard = ["BIG RED DOG", "UNDER THE SEA", "SCRATCH YOUR HEAD", "DROP YOUR PEN", "WHAT IS TIME", "MORNING CHALLENGE"];

function __game__(value){
	console.log("We are in game function");
	if(value<100){
		console.log("It is less than 100");
	}else if(value>= 100){
		console.log("It is greater than or equal to 100");
	}else{
		console.log("JACKPOT");
	}
	//console.log("Pick a category: Easy, Medium, Hard");
	//Pretending the input is "Easy"
	//var __cat__ = "Easy"//document.getElementById
	var __cat__ = prompt("Pick a category: Easy, Medium, Hard");
	if(value == "jPOT")
		value = randInt(5000, 10000);
	value = parseInt(value);
	value *= __guess__(__cat__);

	alert(("Your points:" + value));
}

function __guess__(word){
	var score = 0;
	var state = "";
	if(word==="Easy"){
		console.log("You chose the Easy cetegory");
		state = easy[getRandomInt(easy.length)];
		score = 1 * __game2__(state, word);
	}else if(word==="Medium"){
		console.log("You chose the Medium category");
		state = medium[getRandomInt(medium.length)];
		score = 2 * __game2__(state, word);
	}else if(word==="Hard"){
		console.log("You chose the Hard category");
		state = hard[getRandomInt(hard.length)];
		score = 3 * __game2__(state, word);
	}else{
		console.log("Not a category... how did we get here?!");
	}
	return score;
}

function __game2__(state, word){
	console.log(state);
	var temp = state;
	var guesses = 1;
	var g_word = "";
	var _i_ = "";
	for(let i = 0; i < state.length; i++){
		if(state[i] == " ")
			g_word += " ";
		else
			g_word += "_";
	}
	while(guesses<5){
		var bool = false;
		var pass = false;
		console.log(g_word);
		_i_ = prompt("Guess a letter");
		for(let i = 0; i < state.length; i++){
			//console.log(_i_.toUpperCase(), state[i]);
			//console.log("In forloop");
			if(_i_.toUpperCase() == state[i]){
				console.log("in If statement", state[i]);
				bool = true;
				g_word = g_word.replaceAt(i, state[i]);
				state = state.replaceAt(i, "");
				__grid__(g_word, word);
				//	add i-- after replaceAt works
			}
		}//	End of forloop
		if(!bool){
			console.log("In !bool");
			alert("You are wrong\n" + "Guesses left: " + (5-guesses));
			guesses++;
		}
		if(g_word === temp){
			console.log(g_word);
			alert("You finished the game!");
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

function __grid__(str, word){
	// var str = "DAVID IS WeeB";
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

	var _y23_ = 0;
	var _y27_ = 0;
	var temp1 = 0;
	var counter = 0; //	for testing

	if(word === "Easy" || word === "Medium"){
		_y23_ = 200;
		_y27_ = 100;
	}
	else if(word === "Hard")
		_y23_ = 100;
	else//	In case it doesn't work for some reason
		_y23_ = 0;
	temp1 = _y23_;
	var bool1 = false;
	var superBool = true;
	for(let y = 0; y < c.height; y+=100){//	let x = 0; x < c.width; x+=50
		for(let x = 0; x < c.width; x+=50){//	let y = 0; y < c.height; y+=100
			if(x===50)
				bool1 = true;
			else if(x===950)
				bool1 = false;
			if(str[index] === " "){
				_y23_ += temp1;
				index2 = 0;
				index2a = 50;
				index3 = 100;
				index4++;
				bool1 = false;
				index++;
				//console.log("Space", x, y + "(", _y23_, ")");
			}
			else if (isLetter(str[index]) || str[index] === "_"){
				//console.log("Letter", x, y + "(", _y23_, ")");
				bool1 = true;
				counter++;
				//console.log(counter);
			}
			else{
				console.log("line 148");
				bool1 = false;
			}
			if(superBool && bool1 && y == _y23_ && x != 0){
				//console.log("In draw", x, _y23_, str[index], index);
				ctx.beginPath();
				ctx.lineWidth="10";
				ctx.strokeStyle="blue";
				ctx.rect(x,y,50,100);
				ctx.stroke();
				ctx.fillStyle = "white";
				ctx.fill();
				ctx.fillStyle = "#000";
				ctx.font = "48px serif";
				ctx.fillText(str[index], (55)+(50*index2), (165+_y27_)+(index3*index4));
				if(index < str.length-1){
					index++;
					index2++;
				}
				else{
					bool1 = false;
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

	function isLetter(str_) {
	  return str_.length === 1 && str_.match(/[a-z]/i);
	}
}





