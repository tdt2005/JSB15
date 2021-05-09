// for (var i = 0; i < 10; i++){
//     setTimeout(function(){
//         alert(i);
//     }, 1000 * i)
// }

// function sum(a,b,c){
//     return a+b+c
// }
// sum(9,10,11)

// function bmi(height, weight){
//     return weight/(height**2)
// }
// let height=prompt("height:")
// let weight=prompt("weight:")
// bmi(height, weight)

// document.getElementById('login').addEventListener('click', change)
// function change() {
//     document.getElementById('page').innerHTML = 'Login succesful'
// }

// let userEmail = document.getElementById("email").value
// let userPassword = document.getElementById("password").value
// let emailStore = 'example@gmail.com'
// let passwordStore = 123

function register() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email === '') {
        alert("pls enter your email")
    }else if (password === '') {
        alert("pls enter your password")
    }else console.log(email, password)
}
// if(userEmail == 'example@gmail.com' && userPassword == '123'){
//     document.getElementById('login').addEventListener('click', change)
//     function change() {
//         document.getElementById('page').innerHTML = 'Login succesful'
//     }
// }