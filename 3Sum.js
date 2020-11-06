num1 = 0 //num1 is a variable which stores the number 0
num2 = 0 //num2 is a variable which stores the number 0
num3 = 0 //num3 is a variable which stores the number 0
//console.log(num1) //test initial num1 value
//console.log(num2) //test initial num2 value
//console.log(num3) //test initial num3 value
const sum = new Function('num1', 'num2', 'num3', 'return num1 + num2 + num3') //should add num1 and num2 together

let solution = sum(5,9,2)
console.log(solution) //should equal 16

solution = sum(4,1,9)//should equal 14
console.log(solution)