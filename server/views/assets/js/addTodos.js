const socket = io();

// Function For Submitting Todo 
function submit(){
    const todo = document.getElementById('todo').value
    fetch('/add-todo' , {
        headers : {
            'Content-type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify({todo : todo})
    })
    .then((res)=>{
        return res.json()
    })
    .then((myJson)=>{
        console.log(myJson);
        
    })
}


socket.on('connect' , ()=>{
    console.log('server Connected');
    
})

// SocketIO event listener For Geetting Todos Realtime
socket.on('newTodo' , (newTodo)=>{
    var listRef = document.getElementById('todo-list')
    listRef.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
        <span>${newTodo.success.todo}</span>
        <div>
        <span><button class="btn btn-danger"  onClick="deleteTodo('${newTodo.success._id}')">Delete</button></span>
        <span><button class="btn btn-primary"  onClick="editTodo(this , '${newTodo.success._id}')">Edit</button></span>
        </div>
    </li>

    `  
})


// Function For Deleting Todos
function deleteTodo(key){
    fetch('deletetodo' , {
        headers : {
            'Content-type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify({key : key})
    })
        .then((res)=>{
            return res.json()
        })
        .then((success)=>{
            console.log('success');            
        })
}



// Function To Show Text Field For Edit Todo
function editTodo(e , key){
     const nodeToDelete = e.parentNode.parentNode.parentNode;
     const childNode = nodeToDelete.childNodes[1]
     oldText = childNode.innerText

    nodeToDelete.removeChild(childNode)
    nodeToDelete.innerHTML = `
            <span>
                <input type='text' class="form-control" style="width : 850px;" />
            </span>
            <div>
                <span><button class="btn btn-danger" onClick="cancle(this , '${key}')">Cancle</button></span>
                <span><button class="btn btn-success" onClick="updateText(this , '${key}')">Update</button></span>
            </div>
    `
    nodeToDelete.childNodes[1].childNodes[1].value = oldText
   
}

// Function For Saving Updated To
function updateText(e , key){    
    const parentNode =e.parentNode.parentNode.parentNode.childNodes
    const newText = parentNode[1].childNodes[1].value   
    const nodeToDelete1 = parentNode[1].childNodes[1]    
    const nodeToDelete2 = parentNode[3]
    const editedTodoObj = {
        key,
        newText
    }

    fetch('/edit' , {
        headers : {
            'Content-type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify(editedTodoObj)
    })
    
    
    parentNode[1].removeChild(nodeToDelete1)
    parentNode[3].removeChild(nodeToDelete2.childNodes[1])
    parentNode[3].removeChild(nodeToDelete2.childNodes[2])
    parentNode[1].innerText = newText
    parentNode[3].innerHTML = `
            <span><button class="btn btn-danger"  onClick="deleteTodo('${key}')">Delete</button></span>
            <span><button class="btn btn-primary"  onClick="editTodo(this , '${key}')">Edit</button></span>
    `
    
}


// Function For Cancelling Editing Todos
function cancle(e , key){
    const parentNode = e.parentNode.parentNode.parentNode.childNodes
    parentNode[1].removeChild(parentNode[1].childNodes[1])
    parentNode[3].removeChild(parentNode[3].childNodes[1])
    parentNode[3].removeChild(parentNode[3].childNodes[2])
    parentNode[1].innerText = oldText
    parentNode[3].innerHTML = `
         <span><button class="btn btn-danger"  onClick="deleteTodo('${key}')">Delete</button></span>
         <span><button class="btn btn-primary"  onClick="editTodo(this , '${key}')">Edit</button></span>
    ` 
    
    
}