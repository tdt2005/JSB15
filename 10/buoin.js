let finalResult = ""
let numButtons = document.getElementsByClassName("number")
let resultButton = document.getElementById("result")
resultButton.innerHTML = "0"
for (let i = 0; i < numButtons.length; i += 1) {
    numButtons[i].addEventListener('click',function() {
        finalResult = finalResult + numButtons[i].innerHTML
        resultButton.innerHTML = finalResult
    })
}
function reset() {
    resultButton.innerHTML = "0"
}