num1 = 0 //num1 is a variable which stores the number 0
num2 = 0 //num2 is a variable which stores the number 0
const sum = new Function('num1', 'num2', 'return num1 + num2') //should add num1 and num2 together
let solution = sum(5, 9)

solution = sum(4,1)//should equal 5