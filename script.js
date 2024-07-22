class CSnake {
    constructor(SnakeСoordinate, Direction) {
        this.SnakeСoordinate = SnakeСoordinate
        this.Direction = Direction
    }
}

class CField {
    constructor(SnakeLenght, EmptyCell, Difficulty) {
        this.SnakeLenght = SnakeLenght
        this.EmptyCell = EmptyCell
        this.Difficulty = Difficulty
    }
}

function InitGame() {
    let Button = document.querySelector('#StartButton')
    const DirectionB = document.querySelector('#Direction')
    DirectionB.style.display = 'block'
    Button.remove()
    const Field = new CField(1, 99, null)
    for (let i = 0; i < 100; i++) {
        if (i == 0) {
            const Snake = new CSnake([[1, 1]], null)
            const Cell = document.createElement('div')
            Cell.classList.add('Cell')
            Cell.classList.add('Snake')
            document.querySelector('.Field').appendChild(Cell)
            const SnakeInformation = document.createElement('div')
            SnakeInformation.textContent = Snake.SnakeСoordinate + ' ' + Snake.Direction + ' - Змія'
            document.body.appendChild(SnakeInformation)
            const FieldInformtion = document.createElement('div')
            FieldInformtion.textContent = Field.SnakeLenght + ' ' + Field.EmptyCell + ' ' + Field.Difficulty + ' - Граве поле'
            document.body.appendChild(FieldInformtion)
        } else {
            const Cell = document.createElement('div')
            Cell.classList.add('Cell')
            document.querySelector('.Field').appendChild(Cell)
        }
    }
}