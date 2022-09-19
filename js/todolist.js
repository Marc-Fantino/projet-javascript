const list = document.getElementById("list");
const form = document.querySelector("form");
const todo = document.getElementById("todo");

// comment ajouter un élément 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${todo.value}</li>`
    stockage();
    todo.value ='';
});

//enlever les elements

list.addEventListener("click", (e) => {
    if(e.target.classList.contains('checked')){
        e.target.remove();
    }else{
        e.target.classList.add('checked');
    }
    stockage();
});

//stockage

function stockage(){
    window.localStorage.todolist = list.innerHTML;
}
function valeurObtenue(){
    let storageContent = window.localStorage.todolist;
    if(!storageContent) {
        list.innerHTML = 
        `<li>Cliquez sur un todo pour le supprimer</li>`;
    }else{
        list.innerHTML = storageContent
    }
}
valeurObtenue();