const newTask = 
document.querySelector('#new-Task')


const funcTask = ()=>{
    console.log(newTask.value)
}

const taskList = document.querySelector('#task-list')
console.log(taskList)

const taskButton = document.querySelector('#task-button')
taskButton.addEventListener('click',funcTask)

const newtaskLi = document.createElement('li')
const newTaskSpan =  document.createElement('span')
const newTaskbtn = document.createElement('button')

taskList.appendChild(newtaskLi)
newtaskLi.appendChild(newTaskSpan)
newtaskLi.appendChild(newTaskbtn)

newtaskLi.classList.add('listContainer')
newtaskLi.classList.add('btn btn-primary')