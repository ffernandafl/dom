/* Colocar una lista en el documento html, colocar un botón que diga agregar elemento. Cada vez que le den clic al botón debe agregar un elemento a la lista. */


//solución carlos
/* const $btn = document.querySelector('#btn');
const $lista = document.querySelector('#lista');

$btn.addEventListener('click', () => {
    const listaItem = document.createElement('li');
    listaItem.textContent ='nuevo elemento';
    $lista.appendChild(listaItem);
}); */


//mi solución

const lista = document.querySelector('#lista');
const texto = document.querySelector ('#input');
const boton = document.querySelector('#btn');

boton.addEventListener ('click', () => {
    let contenido = texto.value;
    let elementoLista = document.createElement('li');
    elementoLista.textContent = contenido;
    lista.appendChild(elementoLista);
})



