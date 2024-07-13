function InitGame() {
    let Button = document.querySelector('#StartButton')
    Button.remove()
    for (let i = 0; i < 99; i++) {
        if (i == 1) {
            //Тут  буде змія
            const Cell = document.createElement('div')
            Cell.classList.add('Cell')
            document.querySelector('.Field').appendChild(Cell)
        }
        const Cell = document.createElement('div')
        Cell.classList.add('Cell')
        document.querySelector('.Field').appendChild(Cell)
    }
}