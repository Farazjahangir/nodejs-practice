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