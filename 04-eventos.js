/* EVENTOS */
/* $ nos ayuda a saber que estamos haciendo referencia a un elemento de html  */

/* const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    console.log('me presionaste') 
}); */

const $btn = document.querySelector('#btn');

$btn.addEventListener('mouseover', () => {
    console.log('me presionaste') 
});

/* const $inpText = document.querySelector('#text');

$inpText.addEventListener('keydown', () => {
    console.log('escribiste algo') 
}); */

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keyup', (e) => {
    console.log(e.target.value) 
});