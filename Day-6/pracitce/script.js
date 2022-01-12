let para = document.getElementById('para');

// function addText(){
//     para.innerText = "Hello World!"
// }

let nameArray = ['Mrudul', "Sobhin", "siddhi", "manthan", "Hrushinda"];

// let string1 = "My Name is name";
//  let string1 = `My Name is ${name}`  // "`" is known as template literals
// console.log(string1)

// function addText(){
//     for(let i = 0; i < nameArray.length; i++){
//         // console.log(nameArray[i])
//         let string1 = `My Name is ${nameArray[i]} <br>`;
//         console.log(string1);
//         para.innerHTML += string1 
//     }
// }
// let iterator = 0;
// function addText() {
//     if (iterator < nameArray.length) {
//         let string1 = `My Name is ${nameArray[iterator]} <br>`;
//         iterator++;
//         // console.log(string1);
//         para.innerHTML += string1;
//     }
//     else{
//         console.log("Bhai bass kr khtm ho gya array")
//     }
// }

let iterator = 0;
function addText() {
    if (iterator < nameArray.length) {
        // console.log(string1);
        para.innerHTML += `<div class="item">${nameArray[iterator]}</div>`;
        iterator++;
    }
    else{
        console.log("Bhai bass kr khtm ho gya array")
    }
}

