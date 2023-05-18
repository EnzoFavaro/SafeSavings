//captura os campos do formulário de cadastro e envia para a api
form.addEventListener("submit", ()=>{
    const register = {
        login: login.value,
        password: password.value
    }
    fetch('/api/register',{
         method: "POST",
         body: JSON.stringify(register),
         headers: {
            "Content-Type": "application/json" 
         }
    }).then(res => res.json())
    .then(data =>{
        if(data.status == "error"){
            console.log("Erro ao criar conta: "+ data.error)
        }
    })
})