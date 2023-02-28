const categories = document.querySelector('.categories')
const button = document.querySelector('.wrap-block')
const img = document.querySelector('.wrap-button')


button.addEventListener('click', () => {
    if(!categories.classList.contains('show')) {
        categories.classList.add('show')
        img.style.transform = 'rotate(180deg)'
    } else {
        categories.classList.remove('show')
        img.style.transform = 'rotate(0deg)'
    }

})