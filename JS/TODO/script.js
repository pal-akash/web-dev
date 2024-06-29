const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //cross icon
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDataToLocal();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDataToLocal();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDataToLocal();
  }
}, false);


function saveDataToLocal(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();