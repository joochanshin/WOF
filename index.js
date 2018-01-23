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
	document.querySelector(".wheel").style.animation = "flyin 1s ease";
	document.querySelector(".wheel").style.marginTop = "150px";
	document.querySelector("#button").style.display = "block";
	document.querySelector("#button").style.animation = "__fadeIn__ 1s ease";
}

function __r__(){
	console.log("In __r__");
	document.querySelector(".wheel").style.animation = "__rotate__ 1s ease";
}