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
	document.getElementsByClassName("right_curtain")[0].style.marginLeft = "2000px";
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

// function __test__(){
// 	console.log('whatever')
	
// 	document.querySelector(".wheel").style.transform = "rotate(" + (deg) + "deg)";
// 	setTimeout(__randomSpin__, 1000);
// }

function randInt(max) {
  return Math.floor(Math.random() * max);
}

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
    __game__(label[ai]);
    return 0;
  }
  //for game later
  drawImg();
  window.requestAnimationFrame( anim );
}());

document.getElementById("button").addEventListener("mousedown", function(){
  isStopped = true;
}, false);

function __game__(value){
	var easy = ["THINK", "WORD", "HELLO", "PHONE", "CHAIR", "TABLE"];
	var medium = ["COMPUTER", "REACTION", "TACHYCARDIA", "MITOCHONDRIA", "ACADEMY", "EVERYTHING"];
	var hard = ["BIG RED DOG", "UNDER THE SEA", "SCRATCH YOUR HEAD", "DROP YOUR PEN", "WHAT IS THE TIME", "MORNING CHALLENGE"];
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
}
