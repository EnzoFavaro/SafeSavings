// form.addEventListener("submit", ()=>{
//     const register = {
//         user: login.value,
//         password: senha.value
//     }
//     fetch('/api/register',{
//          method: "POST",
//          body: JSON.stringify(register),
//          headers: {
//             "Content-Type": "application/json" 
//          }
//     }).then(res => res.json())
//     .then(data =>{
//         if(data.status == "error"){
//             window.alert("Erro ao criar conta")
//         }
//     })
// })