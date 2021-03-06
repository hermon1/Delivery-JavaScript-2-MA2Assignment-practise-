let listItems = [{
    isbn: "1600506460320",
    title: "Great book",
},
{
    isbn: "1600506460373",
    title: "Ok book",
},
{
    isbn: "1600506460521",
    title: "Bad book",
},
{
    isbn: "1600506460456",
    title: "Terrible book",
},];


const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);

function addToList() {
    const newItem = listInput.value.trim();

    if (newItem.length >= 2) {
        listItems.push(newItem);
        createList();
        listInput.value = "";
        listInput.focus();
        console.log(listItems);
    }
}

function createList() {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    listItems.forEach(function (item) {
        listContainer.innerHTML += `<li><span>${item.isbn}</span> <span>${item.title}</span><i class="fa fa-trash" data-item="${item}"></li</li>`;
    });

    const items = document.querySelectorAll("li span");

    items.forEach(function (item) {
        item.addEventListener("click", handleClick);
    });
    const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
can.addEventListener("click", removeFromList);
    });
}

function handleClick(event) {
    event.target.classList.toggle("complete");
}

function removeFromList(){
    console.log(event);

    const deleteThisItem = event.target.dataset.item;
    const newList = listItems.filter(function(item){
if(deleteThisItem !== item) {
return true;

}

    });

    listItems = newList;

    createList();
}