const inputBox = document.querySelector(".input-box input");
const addButton = document.querySelector(".input-box button");
const todoBox = document.querySelector(".todo-box");
const clearAll = document.querySelector(".pending button");

inputBox.onkeyup = ()=> {
    let userData = inputBox.value;
    if(userData.trim() !=0) { 
        addButton.classList.add("active"); 
    } else {
        addButton.classList.remove("active");
    }
}

showTasks();

addButton.onclick = ()=> {
    let userData = inputBox.value; 
    let getLocalStorage = localStorage.getItem("Novo");
    if(getLocalStorage == null) { 
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage); 
    }
    listArr.push(userData);
    localStorage.setItem("Novo", JSON.stringify(listArr)); 
    showTasks(); 
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("Novo"); 
    if(getLocalStorage == null) { 
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage); 
    }
    const pendingNumb = document.querySelector(".number-pending");
    pendingNumb.textContent = listArr.length; 
    if(listArr.length > 0) { 
        clearAll.classList.add("active");
    } else {
        clearAll.classList.remove("active");
    }
    let newLiTag = '';
   
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="removeTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoBox.innerHTML = newLiTag; 
    inputBox.value = ""; 
}

function removeTask(index) {
    let getLocalStorage = localStorage.getItem("Novo");
    listArr = JSON.parse(getLocalStorage); 
    listArr.splice(index, 1); 
    localStorage.setItem("Novo", JSON.stringify(listArr)); 
    showTasks(); 
}

clearAll.onclick = ()=> {
    listArr = []; 
    localStorage.setItem("Novo", JSON.stringify(listArr)); 
    showTasks(); 
}