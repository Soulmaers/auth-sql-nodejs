

const input = document.querySelectorAll('.inp')
console.log(input)

const button = document.querySelector('.btn')

button.addEventListener('submit', () => {

    input.forEach(el => {
        console.log(el.value)
    })
})