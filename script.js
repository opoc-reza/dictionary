let input = document.querySelector('input')
let button = document.querySelector('button')


function loadData() {
    console.log('Loading')
}

button.addEventListener('click', () => {
    if (input.value && input.value.trim() && isNaN(input.value)) {
        loadData()
    }else {
        alert('pls Enter something🙏 !dont use Number')

    }
})

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('en')
        if (input.value && input.value.trim() && isNaN(input.value)) {
            loadData()
        }else {
            alert('pls Enter something🙏 !dont use Number')
        }
    }
})