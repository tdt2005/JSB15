//bai5
let x = prompt("toa do x")
let y = prompt("tao do y")
if (x > 0 && y > 0) {
    console.log("diem thuoc goc phan tu thu 1")
} else if (x < 0 && y > 0) {
    console.log("diem thuoc goc phan tu thu 2")
} else if (x < 0 && y < 0) {
    console.log("diem thuoc goc phan tu thu 3")
} else if (x > 0 && y < 0) {
    console.log("diem thuoc goc phan tu thu 4")
} else if (y == 0 && x != 0) {
    console.log("diem thuoc truc hoanh")
} else if (x == 0 && y != 0) {
    console.log("diem thuoc truc tung")
} else {
    console.log("diem thuoc goc toa do")
}

//bai1
for (i = 0; i < 1000; i++) {
    console.log(i)
    if (i % 2 == 0) {
        console.log("chan")
    } else console.log("le")
}

//bai4
let year = prompt("Nhap nam ban muon tim: ")
if (year % 4 == 0) {
    console.log("Day la nam nhuan")
} else console.log("Day ko la nam nhuan")

//bai bonus
let a = prompt("nhap so a")
let b = prompt("nhap so b")
let c = prompt("nhap so c")
let delta = b * b - 4 * a * c
if (delta < 0) {
    console.log("phuong trinh vo nghiem")
} else if (delta == 0) {
    console.log("phuong trinh co nghiem duy nha la " + (-b / 2 * a))
} else if (delta > 0) {
    console.log("Phuong trinh co nghiem 1 la " + (-b + Math.sqrt(delta) / 2 * a))
    console.log("Phuong trinh co nghiem 2 la " + (-b - Math.sqrt(delta) / 2 * a))
} else if (a == 0 && b != 0 && c != 0) {
    console.log("Phuong trinh co nghiem la " + (-c / b))
} else if (a == 0 && b == 0 && c != 0) {
    console.log("Phuong trinh vo nghiem")
}

//bai2
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let user = prompt("Nhap so ban muonthem vao: ")
console.log(number.push(user))

//bai 3