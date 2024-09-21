function addValidation(){
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

addValidation();

function addLista(){
    const arrLinks = ["index.html", "what-is.html", "why-celebrated.html"]
    const navArr = ["dos noviembre", "what it's?", "why celebrated it?"]
    //const navArr = [["index.html","dos noviembre"], ["what-is.html","what it's?"], ["why-celebrated.html","why celebrated it?"]]
    for(i = 0; i < arrLinks.length; i++){
        for(j = 0; j < navArr[i].length; i++){

                const li = document.createRange().createContextualFragment(`
                    
                        <li><a href="${arrLinks[i]}">${navArr[i]}</a></li>
        
                    `)
                    const lista = document.querySelector('.lista')
                    lista.append(li)
            
            }
    }

}

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

btn_enviar.addEventListener("click", validar);
addLista();