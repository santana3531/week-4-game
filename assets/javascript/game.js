// Global Variables
var minNumber = 19;
var maxNumber = 120;
var emerald = 0;
var diamond = 0;
var morganite = 0;
var tanzanite = 0;
var totalScore = 0;

var randomNum = firstNum(minNumber, maxNumber);


//Declaring functions
function firstNum(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// This function will set the values for my crystals
function randomizeCrystals(){
	emerald = firstNum(1, 12);
	diamond = firstNum(1, 12);
	morganite = firstNum(1, 12);
	tanzanite = firstNum(1, 12);
	console.log("emerald: " + emerald);
	console.log("diamond: " + diamond);
	console.log("morganite: " + morganite);
	console.log("tanzanite: " + tanzanite);
}



//Calling functions and main code
console.log("randomNum: " + randomNum);


$(".startingNum").html(randomNum);
	console.log(randomNum);

$(".emerald").on("click", function(){
	console.log("emerald was clicked");
	totalScore = totalScore + emerald;
	console.log(totalScore);
})

$(".diamond").on("click", function(){
	console.log("diamond was clicked");
	totalScore = totalScore + diamond;
	console.log(totalScore);
})

$(".morganite").on("click", function(){
	console.log("morganite was clicked");
	totalScore = totalScore + morganite;
	console.log(totalScore);
})

$(".tanzanite").on("click", function(){
	console.log("tanzanite was clicked");
	totalScore = totalScore + tanzanite;
	console.log(totalScore);
})


// Calling the function that randomizes the crystals
randomizeCrystals();
