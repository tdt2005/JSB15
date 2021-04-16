// Bai 1 + 2
let list = [
    { name: "Huy", age: 17 },
    { name: "Lan", age: 14 },
    { name: "Son", age: 13 },
    { name: "Hoang", age: 17 },
    { name: "Khoi", age: 16 },
    { name: "LuongNgoc", age: 16 },
    { name: "Minh", age: 17 },
    { name: "Trung", age: 16 },
    { name: "Khoa", age: 14 },
    { name: "NamAnh", age: 16 },
    { name: "Vinh", age: 17 },
    { name: "Dung", age: 17 },
]

console.log(list)
var sum = 0
for (i = 0; i < list.length; i += 1) {
    sum += list[i].age
}
console.log(sum)
//bai 3
for (i = 999; i > 0; i -= 3) {
    console.log(i)
}