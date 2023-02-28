const sidebar = document.querySelector('.sidebar-overlay')
const backButton = document.querySelector('.back-button')
const openButton = document.querySelector('.open-button')


backButton.addEventListener('click', () => {
    sidebar.classList.remove('show')
})

openButton.addEventListener('click', () => {
    sidebar.classList.add('show')
})