alert('Я видалив блок зі стрілочками через ненадібність працюють тільки стрілки на клавіатурі')

let Field = document.querySelector("#Field")
let popup = document.querySelector("#StartButton");
let width = 10;
let currentIndex = 0
let appleIndex = 0
let currentSnake = [2, 1, 0]
let direction = 1
let interval = 0
let IntervalTimer
let GameStarted = false
let StartDate

popup.addEventListener('click', (e) => {
    if (!GameStarted) {
        createBoard()
        InitGame()
        GameStarted = true
    } else if (GameStarted) {
        replay()
    }
})


function createBoard() {
    popup.style.display = "none";
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        div.classList.add('Cell')
        Field.appendChild(div)
    }
}


function InitGame() {
    let squares = document.querySelectorAll("#Field div")
    randomApple(squares)
    direction = 1
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add("snake"))
    interval = setInterval(moveOutcome, 1000)
    StartDate = new Date()
    IntervalTimer = setInterval(() => {
        const TimerContainer = document.querySelector('#Timer')
        const CurretDate = new Date
        const Delta = CurretDate - StartDate
        const day = Math.floor(Delta / 86400000)
        const hour = Math.floor((Delta - day * 86400000) / 3600000)
        const min = Math.floor((Delta - (day * 86400000 + hour * 3600000)) / 60000)
        const sec = Math.floor((Delta - (day * 86400000 + hour * 3600000 + min * 60000)) / 1000)
        if (sec >= 1 && min == 0) {
            TimerContainer.textContent = 'Всього часу : ' + sec + ' Секунд'
        } else if (min >= 1) {
            TimerContainer.textContent = 'Всього часу : ' + min + ' Мінут : ' + sec + ' Секунд'
        }}, 1000)
}



function moveOutcome() {
    let squares = document.querySelectorAll("#Field div")
    if (checkForHits(squares)) {
        alert("Ви проглали")
        popup.style.display = "flex"
        Field.innerHTML = ""
        StartDate = 0
        clearInterval(IntervalTimer)
        return clearInterval(interval)
    } else {
        moveSnake(squares)
    }
}

function moveSnake(squares) {
    let tail = currentSnake.pop()
    squares[tail].classList.remove("snake")
    currentSnake.unshift(currentSnake[0] + direction)
    eatApple(squares, tail)
    squares[currentSnake[0]].classList.add("snake")
}

function checkForHits(squares) {
    if (
        (currentSnake[0] + width >= (width * width) && direction === width) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
        return true
    } else {
        return false
    }
}

function eatApple(squares, tail) {
    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple")
        squares[tail].classList.add("snake")
        currentSnake.push(tail)
        randomApple(squares)
    }
}

function randomApple(squares) {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple")
}

window.addEventListener("keydown", (e) => { if (e.key == 'ArrowUp' && direction != +width) { direction = -width } })
window.addEventListener("keydown", (e) => { if (e.key == 'ArrowDown' && direction != -width) { direction = +width } })
window.addEventListener("keydown", (e) => { if (e.key == 'ArrowLeft' && direction != 1) { direction = -1 } })
window.addEventListener("keydown", (e) => { if (e.key == 'ArrowRight' && direction != -1) { direction = 1 } })

function replay() {
    createBoard()
    InitGame()
    popup.style.display = "none";
}  