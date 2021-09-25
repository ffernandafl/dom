let edad=document.querySelector('#edad');
let input=document.querySelector('#input');


/* let writeAge = () => {
    let inputValue = input.value;
    if (parseInt(inputValue) >= 18) {
        edad.textContent = "Eres mayor de edad";
    } else {
        edad.textContent = "Eres menor de edad";
    }
} */

//otra solución

let writeAge = () => {
    let inputValue = input.value;
    let mensaje = inputValue >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
    edad.textContent=mensaje;
}

    
   
