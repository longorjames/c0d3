num1 = 0 //num1 is a variable which stores the number 0
//num2 = 0 //num2 is a variable which stores the number 0
//num3 = 0 //num3 is a variable which stores the number 0
//console.log(num1) //test initial num1 value
//console.log(num2) //test initial num2 value
//console.log(num3) //test initial num3 value
let result = "" //declare empty string

const Greater5 = (num1) => {
	if(num1>5){
	result = "true"
} else {
	result = "false"
}
}
let solution = Greater5(9)
console.log(result) //should be true

solution = Greater5(4)//should be false
console.log(result)