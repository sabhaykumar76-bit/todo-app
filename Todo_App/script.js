const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask(){

    if(inputBox.value.trim() === ""){
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `${inputBox.value}<span>&times;</span>`;

    listContainer.appendChild(li);
    inputBox.value = "";
    const cross = li.querySelector("span");

    cross.onclick = function(){
        li.remove();
    };
}
inputBox.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addTask();
    }
});