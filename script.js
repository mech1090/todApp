


const inputFunc = ()=>
{
const inputBarValue = document.querySelector('#new-Task')
const newLi = document.createElement('li')
const newSpan = document.createElement('span')
const newBtn = document.createElement('button')

const newTaskList = document.querySelector('#task-list')
newTaskList.appendChild(newLi)
newLi.appendChild(newSpan)
newLi.appendChild(newBtn)

newLi.classList.add('listContainer', 'list-group-item')
newBtn.classList.add('btn', 'btn-danger')
newBtn.textContent = 'x'

newSpan.textContent = inputBarValue.value
}


const inputBarButton = document.querySelector('#task-button')


const upperLi = document.querySelector('#task-list')
inputBarButton.addEventListener('click',inputFunc)








/*

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

newtaskLi.classList.add('listContainer', 'list-group-item')
newtaskLi.classList.add('btn', 'btn-danger')
newTaskbtn.textContent='x'
*/
