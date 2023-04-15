const pannels = document.querySelectorAll('.pannel');

// console.log(pannels)

pannels.forEach((pannel) => {
    pannel.addEventListener('click', () => {
        // console.log(pannel)
        removeActiveClasses()
        pannel.classList.add('active')
    })
}) 

function removeActiveClasses() {
    pannels.forEach((pannel) => {
        pannel.classList.remove('active')
    })
}