// function funcName(item){
//     console.log(item)
// }

// function changeText() {
//     let heading = document.getElementsByTagName('h1');
//     heading[0].innerHTML = '<a href="https://www.google.com">Google</a>'
// }
// let counter = 0;
// function increment(){
//     let heading = document.getElementsByTagName('h1');
//     counter++;
//     heading[0].innerText = counter;
// }
// function changeText(){
    
// let idBased = document.getElementById("heading")
// // console.log(idBased)
// idBased.innerText = "Hello"
// }

// let classBased = document.getElementsByClassName('heading');
// console.log(classBased)


// let tagBased = document.getElementsByTagName("h1")
// console.log(tagBased)


// let queryBased = document.querySelectorAll('h3')
// console.log(queryBased)

// let queryBased = document.querySelectorAll(".heading")
// console.log(queryBased)


// let queryBased = document.querySelector("#query")
// console.log(queryBased)



// let createdElement = document.createElement("img")
// createdElement.src = "https://images.unsplash.com/photo-1641842909513-0c59448a17d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"


// document.body.appendChild(createdElement)

// let createdElement = document.createElement("a")
// createdElement.href = "https://images.unsplash.com/photo-1641842909513-0c59448a17d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
// createdElement.innerText = "Phool Image"

// document.body.appendChild(createdElement)
//     removeElement.remove()

// let removeElement = document.getElementById('query');
// function removeElem(){
//     removeElement.remove()
// }

// let createdElement = document.createElement("img")
// createdElement.src = "https://images.unsplash.com/photo-1641842909513-0c59448a17d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"


// document.body.appendChild(createdElement)

// let replacedElement = document.createElement("a")
// replacedElement.href = "https://images.unsplash.com/photo-1641842909513-0c59448a17d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
// replacedElement.innerText = "Phool Image"
// // document.body.appendChild(replacedElement);

// document.body.replaceWith(replacedElement, createdElement)


// let query = document.getElementById('query');
// query.style.color = "yellow"

function funcName(){
    console.log("Hello")
}


let query = document.getElementById("query");
query.addEventListener("click", funcName)