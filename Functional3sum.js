num1 = 1 //num1 is a variable which stores the number 1
num2 = 2 //num2 is a variable which stores the number 2
num3 = 1 //num3 is a variable which stores the number 1
//console.log(num1) //test initial num1 value
//console.log(num2) //test initial num2 value
//console.log(num3) //test initial num3 value

const sum = (num1, num2) => { //create sum function that takes in 2 values
	let subtotal = num1 + num2
	return subtotal
}
const a = (num3) => { //create a function to add a value to a function
	let total = sum(num1, num2) + num3
	return total
}

console.log(a(num3)) //should return 4

num3 = 5
console.log(a(num3)) //should return 8

num3 = 2
console.log(a(num3)) //should return 5
