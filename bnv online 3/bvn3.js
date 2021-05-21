function changeInput() {
    let red = document.getElementById('red').value
    let green = document.getElementById('green').value
    let blue = document.getElementById('blue').value
    let background = "rgb(" + red + "," + green + "," + blue + ")"

//color input
    if (red == "") {
        alert("enter color red")
    }else if (green == "") {
        alert("enter color green")
    }else if (blue == "") {
        alert("enter color blue")
    }else document.body.style.background = background


}
function changeClick() {
    //color chose
    if (document.getElementById("Rred").checked) {
        document.body.style.background = 'rgb(255, 0, 0)'
    }else if(document.getElementById("Ryellow").checked) {
        document.body.style.background = 'rgb(255, 255, 0)'
    }else if(document.getElementById("Rblue").checked) {
        document.body.style.background = 'rgb(0, 0, 255)'
    }else if(document.getElementById("Rgreen").checked) {
        document.body.style.background = 'rgb(0, 255, 0)'
    }else if(document.getElementById("Rpink").checked) {
        document.body.style.background = 'rgb(255, 0, 255)'
    }else if(document.getElementById("Rnone").checked) {
        document.body.style.background = 'rgb(255, 255, 255)'
    }
}   