let Length = null
function Start() {
    Length = prompt('Введіть висоту ялинки')

    switch (Length) {
        case ('0'): {
            alert('Ялинка не може бути величиной 0')
            Start()
        }
        case ('1'): {
            alert('Ялинка не може бути величиной 1')
            Start()
        }
    }
    if (Length) {
        alert('Привіт!')
        document.querySelectorAll('div').forEach(div => {
            div.remove()
        })
        for (let i = 1; i <= Length; i++) {
            const Color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            const Div = document.createElement('div')
            Div.textContent = i
            Div.style.backgroundColor = Color
            Div.style.width = i * 10 + 'px'
            document.body.appendChild(Div)
        }
    }
}