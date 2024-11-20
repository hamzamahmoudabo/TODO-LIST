const inputtask = document.querySelector("#input-task")
const btn = document.querySelector(".btn")
const tasklist = document.querySelector(".task-list")


function addtask() {
    let taskvalue = inputtask.value;


    if (!taskvalue) {
        alert("you must enter task");
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = taskvalue;
        tasklist.appendChild(li);

        span.innerHTML = "&times;";
        li.appendChild(span);

    }
    inputtask.value = "";
    setTask();
}

btn.addEventListener("click", addtask)

tasklist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        setTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        setTask();
    }

});


inputtask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addtask();
    }
})

function setTask() {
    localStorage.setItem("lists", taskList.innerHTML)
}



function loadTasks() {
    tasklist.innerHTML = localStorage.getItem("lists");
}
loadTasks()