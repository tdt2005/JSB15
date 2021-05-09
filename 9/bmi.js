let bmi
function calculate() {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    bmi = weight / (height ** 2)
    console.log(bmi)
    change()
}
function change() {
    document.getElementById('result').innerHTML = bmi
    if (bmi < 18.5) {
        document.getElementById('condition').innerHTML = 'Under weight'
    } else if (18.5 < bmi && bmi < 24.9) {
        document.getElementById('condition').innerHTML = 'Normal'
    } else document.getElementById('condition').innerHTML = 'Over weight'
}
