/* THIS IS FOR THE TODO LIST */
const toDoListInput = document.getElementById("toDoList-input");
const toDoListBtn = document.getElementById("toDoList-btn");
const toDoListUl = document.getElementById("toDoList-ul");

toDoListBtn.addEventListener("click", function () {
  if (!toDoListInput.value) {
    alert(`Attention!!! \nNothing to add to your list \nYou have not typed any list.`)
  }else {
    const span = document.createElement("span");
    span.textContent = "x";

    const li = document.createElement("li");
    li.textContent = toDoListInput.value;
    li.appendChild(span);
    
    toDoListUl.appendChild(li);

    saveList();
  }

  toDoListInput.value = "";
})

toDoListUl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");

    saveList();
  }else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();

    saveList();
  }
})

function saveList() {
  localStorage.setItem("data", toDoListUl.innerHTML);
}

function getList() {
  toDoListUl.innerHTML = localStorage.getItem("data");
}

getList();
/* ---------------------------- */