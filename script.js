const taskList = document.forms.taskList;
const input = document.getElementById('input');
const add = document.getElementById('button');
const warning = document.querySelector('.warning');
const errorText = document.querySelector('.errorText');
const buttonX = document.querySelector('.error');
let span = document.getElementsByTagName('span');


add.onclick = function(){
    if (input.value === "") {
        warning.style.display = 'block';
        errorText.innerHTML = 'An empty field cannot be added'
    }
    else if (taskList.length < 13) {
        newTask();
        input.value = "";
    }
    else {
        warning.style.display = 'block';
        errorText.innerHTML = 'Maximum number of tasks reached';
        input.value = "";
    }
}

function newTask(){
    let newElement = document.createElement('input');
    newElement.setAttribute('type', 'checkbox');
    newElement.setAttribute("name", "choice");
    let taskValue = document.createElement('span');
    taskValue.textContent = input.value;
    let enter = document.createElement('br');
    let label = document.createElement('label');
    label.append(newElement, taskValue, enter);

    taskList.append(label);
}

buttonX.addEventListener("click", () => {
    warning.style.display = 'none';
});

buttonX.addEventListener('mouseover', () => {
    event.target.style.backgroundColor = 'green';
    event.target.style.width = '20px';
    event.target.style.height = '20px';
})


buttonX.addEventListener('mouseout', () => {
    event.target.style.backgroundColor = 'rgb(186, 111, 45)';
    event.target.style.width = '15px';
    event.target.style.height = '15px';
})


taskList.addEventListener('click', () => {
    if (event.target.type === "checkbox") {
        if (event.target.checked) {
          if (document.getElementsByName("choice").length > 1) {
            event.target.parentElement.remove();
          } else {
            document.querySelector(".warning").style.display = "block";
            document.querySelector(".errorText").innerHTML =
              "You cannot delete the last task from the list.";
            event.preventDefault();
          }
        }
      }
})