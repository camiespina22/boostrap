let boton = document.getElementById("sumar")
let resultado = document.getElementById("resultado")




boton.addEventListener('click', hacerSuma)

function hacerSuma() {
    let n1 = parseInt(document.getElementById("n1").value)
    let a = n1*1000
    let b = n1*100
    let c = n1*10
    let d = n1/10
    let e = n1/100
    let f = n1/1000





    r1.innerHTML = `la longitud es ${a}mm`
    r2.innerHTML = `la longitud es ${b}cm`
    r3.innerHTML = `la longitud es ${c}dm`
    r4.innerHTML = `la longitud es ${d}dam`
    r5.innerHTML = `la longitud es ${e}hm`
    r6.innerHTML = `la longitud es ${f}km`


}






//resultado.textContent=resultado;

