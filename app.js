const container = document.getElementById("container2");
const inputBox = document.getElementById("input-box");

function uploadTask(){
    if(inputBox.value === ''){
        alert("Add Some Text to proceed!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
        inputBox.value ="";
        loadData();
}

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        loadData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        loadData();
    }
}, false);

function loadData(){
    localStorage.setItem("data", container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();