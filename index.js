document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      const newList = document.createElement("button");

      newList.addEventListener("click", function () {
        taskItem.classList.toggle("important-task");
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete");
      deleteButton.addEventListener("click", function () {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });
});
