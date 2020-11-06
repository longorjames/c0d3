const num1 = () => { //create a function to return a value
	return 5
}
const num2 = () => { //create a function to return a value
	return 6
}

const num3 = (a, b) => { // create a fucntion that adds two functions
	return a + b
}

console.log(num3(num1(), num2())) //should return 11