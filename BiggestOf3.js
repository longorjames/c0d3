num1 = 0 //num1 is a variable which stores the number 0
num2 = 0 //num2 is a variable which stores the number 0
num3 = 0 //num3 is a variable which stores the number 0
//console.log(num1) //test initial num1 value
//console.log(num2) //test initial num2 value
//console.log(num3) //test initial num3 value
let result = "" //declare empty string

const Biggest = (num1, num2, num3) => {
	if(num1>num2 && num1>num3){
	result = num1
} else if(num2>num1 && num2>num3) {
	result = num2
} else {
	result = num3
}
}
let solution = Biggest(5,9,14)
console.log(result) //should be 14

solution = Biggest(4,5,1)//should be 5
console.log(result)