num1 = 5 //num1 is a variable which stores the number 0
num2 = 6 //num2 is a variable which stores the number 0
//console.log(num1) //test initial num1 value
//console.log(num2) //test inicial num2 value
const sum = (a, b) => { //create a function to add 2 values together
	return (a + b)
}
const a = () => { //make a function return a function
	return sum(num1, num2)
}
console.log(a()) //should equal 11
