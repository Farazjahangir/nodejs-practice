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
            console.log(success);
            
        })
}