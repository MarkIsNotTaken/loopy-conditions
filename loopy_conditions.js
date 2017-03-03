/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
function greaterNumber(a, b){
	if(a > b){
		return a;
	}else if(b > a){
		return b;
	}
}

greaterNumber(1, 2);

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
function stringOfNumbers(n) {
	arrey = [];
	for (var i = 0; arrey.length <= n; i++) {
		arrey[i];
	}
	console.log(i);
}

stringOfNumbers(10);

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */
function sumOfArray(a){
	a = [1, 2, 3, 4, 5];
	var res = 0;
	for(var i = 0; i < a.length; i++){
		res += a[i];
	}
	console.log(res);
}

sumOfArray();
/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */


/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */


/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate(num1, num2, operator){
  if(operator === "add"){
    var r1 = num1 + num2;
    console.log(r1);
  }else if(operator === "subtract"){
    var r2 = num1 - num2;
    console.log(r2);
  }
  else if(operator === "divide"){
    var r3 = num1/num2;
    console.log(r3);
  }
  else if(operator === "multiply"){
    var r4 = num1*num2;
    console.log(r4);
  }else{
    var r5 = operator + " is the wrong operator.";
    console.log(r5);
  }
}

calculate(3, 2, "multiply");