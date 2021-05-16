let color = [red, green, blue]

function change() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let background = "rgb(" + red + "," + green + "," + blue + ")"
    document.body.style.background = background
}