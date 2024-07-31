class CSnake {
    constructor(SnakeСoordinate, Direction) {
        this.SnakeСoordinate = SnakeСoordinate
        this.Direction = Direction
        this.Color = 'Green'
    }
}

class CField {
    constructor(SnakeLenght, EmptyCell, Difficulty) {
        this.SnakeLenght = SnakeLenght
        this.EmptyCell = EmptyCell
        this.Difficulty = Difficulty
    }
}

class CFood {
    constructor (Cordinate, color) {
        this.Cordinate = Cordinate
        this.color = 'brown'
    }
}

const Snake = new CSnake([[1, 1]], null)
const Field = new CField(1, 99, null)
const Food = new CFood(null)
let Cells = []
let StartDate

function AddCell(x, y, FSnake, Number) {
    Cells.push([[y, x]])
    if (FSnake) {
        const Cell = document.createElement('div')
        Cell.classList.add('Cell')
        Cell.setAttribute('Cordinate', Cells[Number][1])
        Cell.style.backgroundColor = Snake.Color
        Cells[Number].push(Cell)
        Cells[Number].push(true)
        document.querySelector('.Field').appendChild(Cell)
    } else {
        const Cell = document.createElement('div')
        Cell.classList.add('Cell')
        Cell.setAttribute('Cordinate', Cells[Number][1])
        Cells[Number].push(Cell)
        Cells[Number].push(false)
        document.querySelector('.Field').appendChild(Cell)
    }
}

function InitGame() {
    StartDate = new Date
    Timer()
    let x = 1
    let y = 1
    let Button = document.querySelector('#StartButton')
    const DirectionB = document.querySelector('#Direction')
    DirectionB.style.display = 'block'
    Button.remove()
    for (let i = 0; i < 100; i++) {
        if (i == 0) {
            AddCell(x, y, true, 0)
            x++
        } else {
            if (x <= 10) {
                AddCell(x, y, false, i)
                x++
            } else {
                y++
                AddCell(1, y, false, i)
                x = 2
            }
        }
    }
    createFood()
}

const TimerContainer = document.querySelector('#Timer')

function Timer() {
    setInterval(function () {
        const CurretDate = new Date
        const Delta = CurretDate - StartDate
        const day = Math.floor(Delta / 86400000)
        const hour = Math.floor((Delta - day * 86400000) / 3600000)
        const min = Math.floor((Delta - (day * 86400000 + hour * 3600000)) / 60000)
        const sec = Math.floor(
            (Delta - (day * 86400000 + hour * 3600000 + min * 60000)) / 1000
        )
        if (sec >= 1 && min == 0) {
            TimerContainer.textContent = sec + ' Секунд'
        } else if (min >= 1) {
            TimerContainer.textContent = min + ' Мінут : ' + sec + ' Секунд'
        }
    }, 1000)
}

function createFood() {
    const RandomCell = Math.floor(Math.random() * 99) 
    if (Cells[RandomCell][2]) {
        createFood()
    } else {
        Cells[RandomCell][1].style.backgroundColor = Food.color
        Field.EmptyCell--
    }
}