"use strict"
//! 1
//for(let i = 0; i <= 20; i++) {
//	if(i %2 !== 0) {
//		console. log(i);
//	} else {
//		continue;
//	}
//}

//! 2

//let n = 0;

//while (n < 20) {
//	n++;
//	if (n % 2 === 0) {
//		continue;
//	}
//	console.log(n);
//}

//! 3
//let age = true;

//let userAge = +prompt("How old are you?");

//while (age) {

//	if (userAge <= 18 || isNaN(userAge)) {
//		alert("get over here !");
//		userAge = +prompt("How old are you?");	
//	}else if (userAge > 18) {
//		alert("get out of here !");
//		age = false;
//	}
//}


//! 4
//nextPrime:
//for (let i = 2; i <= 10; i++) {
//	for (let j = 2; j < i; j++) {
//		if (i % j == 0) {
//			continue nextPrime;
//		} 
//	}
//	console.log(i);	
//}

//! 5

const userNumber = prompt("input your number");

let sum = 1;

for (let i = userNumber; i > 0; i = i - 1) {

	if (userNumber === 0) continue;

	sum = sum * i;
}
alert(sum);