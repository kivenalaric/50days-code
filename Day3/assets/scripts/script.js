const open = document.getElementById('open');
const close =  document.getElementById('close');
const container =  document.querySelector('.container');

// const openFxn = () => {
//     container.classList.add('show-nav')
// }
function openFxn() {
    container.classList.add('show-nav')
}

function closeFxn() {
    container.classList.remove('show-nav')
}

// const closeFxn = () => {
//     container.classList.remove('show-nav')
// }

// open.addEventListener
