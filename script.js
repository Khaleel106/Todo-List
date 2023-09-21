const inputBox=document.getElementById("input");
const listContainer=document.getElementById("list-container");

//function to add tasks in the list

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //creates ' x ' and adds to the task view
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
   //marks the tasks as checked(completed)
   if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
   }
   //removes or deletes the task
   else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
}, false);
//saves the data in the local browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//loads or shows the saved data
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showtask();