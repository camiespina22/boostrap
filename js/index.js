console.log("holaaa");
let edad =17;

/*
variable (cambia)
constante (no cambia)
*/
//defino o declaro constante
const mensaje= document.getElementById('mensaje');

const boton=document.getElementById('boton')

boton.addEventListener('click',mostrarFondo)

function mostrarFondo(){
console.log("click")
mensaje.classList.add('bg-success')
}



mensaje.textContent = 'desde javascript';
//emilinar clases
mensaje.classList.remove('bg-primary')
// agregar una clase CSS
//mensaje.classList.add('text-center' , 'bg-warning');

//funcion
function mostrarTexto(e){
    console.log(e)
}
//Invocacion de la funcion
mostrarTexto(edad);