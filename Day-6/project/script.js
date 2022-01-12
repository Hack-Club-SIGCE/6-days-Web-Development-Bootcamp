
// To update the grocery
function updateItem(update){
    update.parentNode.parentNode.children[0].contentEditable = true;
}

// To delete the grocery
function deleteItem(deleteElement){
    deleteElement.parentNode.parentNode.remove();
}
let result = document.getElementById('result');

// To add the grocery
function addGrocery(){
    let groceryName = document.getElementById('groceryName');
    // if else is is used to check that the value is not empty
    if (groceryName.value.length == 0) {
        alert('Bhai Kuch Daal Deta Input me!')
    }
    else{
        result.innerHTML += `<div class="item">
    <p>${groceryName.value}</p>
    <div class="buttons">
        <div class="update" onclick="updateItem(this)">
            <i class="bi bi-pencil"></i>
        </div>
        <div class="delete" onclick="deleteItem(this)">
            <i class="bi bi-trash"></i>
        </div>
    </div>
</div>`
    }
    // to clear the input
groceryName.value = "";
}