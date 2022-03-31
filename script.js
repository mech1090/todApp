const handleDeleteButtonFunc = element=>{
    element.remove()

}


const inputFunc = ()=>
{
const inputBarValue = document.querySelector('#new-Task')
const newLi = document.createElement('li')
const newSpan = document.createElement('span')
const deleteButton = document.createElement('button')

const newTaskList = document.querySelector('#task-list')
newTaskList.appendChild(newLi)
newLi.appendChild(newSpan)
newLi.appendChild(deleteButton)

newLi.classList.add('listContainer', 'list-group-item')
deleteButton.classList.add('btn', 'btn-danger')
deleteButton.textContent = 'x'

newSpan.textContent = inputBarValue.value

// add event listener to deleteButton to delete the row
deleteButton.addEventListener('click',()=>{
    handleDeleteButtonFunc(newLi)
})

}

const inputBarButton = document.querySelector('#task-button')
const upperLi = document.querySelector('#task-list')
inputBarButton.addEventListener('click',inputFunc)
