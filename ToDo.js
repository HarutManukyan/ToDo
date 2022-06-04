let input = document.getElementById('inputField')
let btn = document.getElementById('addToDo')
let tasks = document.getElementById('tasks')
let task = document.getElementsByClassName('task')
let date = document.getElementById('date')
console.log(date.value)

btn.addEventListener("click", addTask)



function addTask(){
    if(input.value !== '' && date.value !== ''){
        let div = document.createElement('div')
        div.classList.add('task')
        div.append(input.value)
        tasks.append(div)
        let remove = document.createElement('div')
        div.append(remove)
        remove.classList.add('remove')
        remove.append('delete')
        remove.classList.add('b')

        remove.addEventListener('click', removeTask)
        function removeTask(){
            div.remove()
        }

        div.addEventListener('click', finished)
        function finished(){
            div.setAttribute('style',  'text-decoration:line-through')
            remove.classList.remove('remove')
            //div.setAttribute('style', 'text-decoration:line-through;')   
            //remove.classList.remove('a')
        }
        
        let dateDiv = document.createElement('div')
        dateDiv.classList.add('datetext')
        dateDiv.append(date.value)
        div.append(dateDiv)

    } else {
        input.setAttribute('placeholder', 'Type something!!!!')
        alert('Choose date')
    }
}
