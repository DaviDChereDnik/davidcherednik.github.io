var $result = $(".calculator-result");
var total = 0
var acts = [];
var numberArr = [];
var number = 0;
var actions = [];

function countTotal(acts, actions) {
	var temp = acts[0];
	for (var i = 0; i < acts.length; i++) {
		if (actions[i] == "/") {
			temp /= acts[i+1];
		}
		else if (actions[i] == "*") {
			temp *= acts[i+1];
		}
		else if (actions[i] == "-") {
			temp -= acts[i+1];
		}
		else if (actions[i] == "+") {
			temp += acts[i+1];
			// console.log(temp);
		}
	}
	return Math.round(temp * 100000000) / 100000000; //8 ziros
	// return temp;
}

$('html').keydown(function(e) {
	if (e.keyCode == 96 || e.keyCode == 48) {
		$(".calculator-wrap:nth-child(5)>.number:nth-child(2)").click();
	}
	else if (e.keyCode == 97 || e.keyCode == 49) {
		$(".calculator-wrap:nth-child(4)>.number:nth-child(1)").click();
	}
	else if (e.keyCode == 98 || e.keyCode == 50) {
		$(".calculator-wrap:nth-child(4)>.number:nth-child(2)").click();
	}
	else if (e.keyCode == 99 || e.keyCode == 51) {
		$(".calculator-wrap:nth-child(4)>.number:nth-child(3)").click();
	}
	else if (e.keyCode == 100 || e.keyCode == 52) {
		$(".calculator-wrap:nth-child(3)>.number:nth-child(1)").click();
	}
	else if (e.keyCode == 101 || e.keyCode == 53) {
		$(".calculator-wrap:nth-child(3)>.number:nth-child(2)").click();
	}
	else if (e.keyCode == 102 || e.keyCode == 54) {
		$(".calculator-wrap:nth-child(3)>.number:nth-child(3)").click();
	}
	else if (e.keyCode == 103 || e.keyCode == 55) {
		$(".calculator-wrap:nth-child(2)>.number:nth-child(1)").click();
	}
	else if (e.keyCode == 104 || e.keyCode == 56) {
		$(".calculator-wrap:nth-child(2)>.number:nth-child(2)").click();
	}
	else if (e.keyCode == 105|| e.keyCode == 57) {
		$(".calculator-wrap:nth-child(2)>.number:nth-child(3)").click();
	}

	if (e.keyCode == 107) {
		$(".act-addition").click();
	}
	else if (e.keyCode == 109) {
		$(".act-subtraction").click();
	}
	else if (e.keyCode == 111) {
		$(".act-division").click();
	}
	else if (e.keyCode == 106) {
		$(".act-multiply").click();
	}
	else if (e.keyCode == 13 || e.keyCode == 187) {
		$(".act-total").click();
	}

	if (e.keyCode == 110 || e.keyCode == 191 || e.keyCode == 190) {
		$('.act-dot').click();
	}
	if (e.keyCode == 8) {
		$('.act-delete-one').click();
	}
});

$(".act-total").on('click', function() {
	total = 0;
	acts.push(number);
	total = countTotal(acts, actions);
	$result.text(total);
	//Save result
	acts = [];
	actions = [];
	//Delete old
	number = total;
	numberArr = String(number).split("");
});

$(".number").on('click', function() {
	numberArr.push($(this).text());
	number = +(numberArr.join(''));
	$result.text(number);
});

$(".act-dot").on('click', function() {
	if (numberArr.length == 0 && number == 0) {
		return;
	}
	else if (numberArr.includes(".")) {
		return;
	}
	numberArr.push($(this).text());
	number = +(numberArr.join(''));
	$result.text(numberArr.join('')); //For shod dot -_-
});

$('.act-delete:nth-child(1)').on('click', function() {
	$result.text(0);
	// acts.push(number);
	// acts.splice(-1, 1);
	if (actions.length != 0) {
		numberArr = [];
		number = 0;
	}
	else {
		$('.act-delete:nth-child(2)').click();
		return;
	}
	// actions.splice(-1, 1);
});

$('.act-delete:nth-child(2)').on('click', function() {
	$result.text(0);
	acts = [];
	numberArr = [];
	number = 0;
	actions = [];
});

$('.act-delete-one').on('click', function() {
	numberArr.splice(-1, 1);
	number = +(numberArr.join(''));
	$result.text(number);
});

$('.act-change').on('click', function() {
	number *= -1;
	$result.text(number);
});

$('.act-division').on('click', function() {
	if (numberArr.length == 0) {
		return;
	}
	actions.push("/");
	$result.text(0);
	acts.push(number);
	number = 0;
	numberArr = [];
});

$('.act-multiply').on('click', function() {
	if (numberArr.length == 0) {
		return;
	}
	actions.push("*");
	$result.text(0);
	acts.push(number);
	number = 0;
	numberArr = [];
});

$('.act-subtraction').on('click', function() {
	if (numberArr.length == 0) {
		return;
	}
	actions.push("-");
	$result.text(0);
	acts.push(number);
	number = 0;
	numberArr = [];
});

$('.act-addition').on('click', function() {
	if (numberArr.length == 0) {
		return;
	}
	actions.push("+");
	$result.text(0);
	acts.push(number);
	number = 0;
	numberArr = [];
});


