const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let taskCount = 0;

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    taskCount++;
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskCount}. ${taskText}</span> <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
      updateNumbering();
    });
  }
}

function updateNumbering() {
  const items = taskList.querySelectorAll("li");
  taskCount = 0;
  items.forEach((item) => {
    taskCount++;
    const span = item.querySelector("span");
    span.textContent = `${taskCount}. ${span.textContent.split('. ').slice(1).join('. ')}`;
  });
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});


