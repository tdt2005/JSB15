let num1 = parseInt(prompt("gia tri 1"))
let num2 = parseInt(prompt("gia tri 2"))
let num3 = parseInt(prompt("gia tri 3"))
let num4 = parseInt(prompt("gia tri 4"))
let num5 = parseInt(prompt("gia tri 5"))

let listNumber = [num1, num2, num3, num4, num5]
var sumAll = (num1 + num2 + num3 + num4 + num5)
var multiple = num1 * num2 * num3 * num4 * num5
var max = Math.max.apply(Math, listNumber)
var min = Math.min.apply(Math, listNumber)

console.log("Tong 5 so la: " + sumAll)
console.log("Tich 5 so la: " + multiple)
console.log("Gia tri lon nhat la: " + max)
console.log("Gia tri lon nhat la: " + min)