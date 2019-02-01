function signIn(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const signInObj = {
        email,
        password
    }

    fetch('/signIn' , {
        headers : {
            "Content-Type" : 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(signInObj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((myJson)=>{
            if(myJson.msg === 'success'){
                window.location.assign('/dashboard')
            }
            else{
                console.log('asas');
                
            }
    })
}