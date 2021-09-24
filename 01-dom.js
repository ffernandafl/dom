/* document.write('Hola desde Javascript'); */

/* Devuelve un arreglo de los elementos que tengan esa etiqueta */
/* const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Título cambiado desde Javascript';

const texto = document.getElementById('text');
texto.innerHTML = 'Este texto está escrito desde javascript';
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(texto); */
/* Obtiene un elemento por id */
document.getElementById
/* Obtiene todos los elementos de una clase y devuelve un arreglo */
document.getElementsByClassName
/* Obtiene todos los elementos por nombre y devuelve un arreglo */
document.getElementsByName
/* Obtiene elementos por etiqueta y devuelve un arreglo*/
document.getElementsByTagName

/* la dif de textContent hace referencia al contenido del elemento, en cambio el innerHTML puede no llegar a ser tan claro. textContent no te deja poner etiquetas como <p> <br>adentro e innerHTML sí */


const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde el Javascript';

/* Crear elementos HTML */
const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);

