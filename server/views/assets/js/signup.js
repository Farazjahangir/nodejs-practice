function signUp(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    const signUpObj = {
        email,
        password
    }
    fetch('/signUp' , {
        headers : {
            "Content-Type" : 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(signUpObj)
    })
    .then((res)=>{
        console.log(res);
        
        return res.json()
    })
    .then((my)=>{
        console.log(my);
        
    })
    
}