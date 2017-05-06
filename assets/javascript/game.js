var minNumber = 19;
var maxNumber = 120;

var randomNum = firstNum(minNumber, maxNumber);

function firstNum(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(randomNum);
console.log('hello');

$(".startingNum").html(firstNum);
	console.log(firstNum);