alert(" dien gia tri a va b de tinh phuong trinh ax + b")

let varA = parseInt(prompt("Gia tri a la:"))
let varB = parseInt(prompt("Gia tri b la:"))

if (varA == 0) {
    if (varB == 0) {
        console.log("Phuong trinh co vo so nghiem")
    }

    else {
        console.log("Phuong trinh vo nghiem")
    }
}
else console.log("Phuong trinh co nghiem la: " + (-varB / varA).toFixed(2))