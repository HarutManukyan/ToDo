let btn = document.getElementById('addToDo')
btn.addEventListener("click", addTask)

function addTask(){

    let input = document.getElementById('inputField')
    let tasks = document.getElementById('tasks')
    let date = document.getElementById('date')

    if(input.value !== '' && date.value !== ''){
        let div = document.createElement('div')
        let p = document.createElement('p')
        div.append(p)
        div.classList.add('task')
        p.append(input.value)
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
            p.setAttribute('style',  'text-decoration:line-through')
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
