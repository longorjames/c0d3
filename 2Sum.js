num1 = 0 //num1 is a variable which stores the number 0
num2 = 0 //num2 is a variable which stores the number 0
console.log(num1) //test initial num1 value
console.log(num2) //test inicial num2 value

const sum = new Function('num1', 'num2', 'return num1 + num2') //should add num1 and num2 together
let solution = sum(5, 9)
console.log(solution) //should equal 14

solution = sum(4,1)//should equal 5
console.log(solution)solution = sum(4,1)//should equal 5