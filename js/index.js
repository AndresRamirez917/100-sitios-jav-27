function addComments(){
    const container = document.createRange().createContextualFragment(`
        
        <div class="container">
            <div class="comments-group">
                <label for="">your Email</label>
                <input id="email" type="text" class="comments-control" placeholder=""> 
            </div>
            <button id="btn-enviar" class=".btn button-1">submit</button>
        </div>
        
        `)
        const comments = document.getElementById('comments');
        comments.append(container);
}
addComments()

const btn_enviar = document.getElementById('btn-enviar')
const email = document.getElementById('email');
const validar = (e) => {
    console.log("madre")
    e.preventDefault();
if(email.value == ""){
     swal({
         title: `El campo Email no puede estar vacío`,
         icon: "error",
          })
         return false;
}
if(!emailValido(email.value)){
    swal({
        title: `El campo Email no posee el formato correcto`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     email.value = "";
return true
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_enviar.addEventListener("click", validar)