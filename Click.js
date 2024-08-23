let LocalInt = localStorage.getItem('LocalInt') == null ? localStorage.getItem('LocalInt') : 0
let SessionInt = sessionStorage.getItem('SessionInt') == null ?  localStorage.getItem('SessionInt') : 0
const LocalBtn = document.querySelector('#LocalBtn')
const SessionBtn = document.querySelector('#SessionBtn')
UpdateLocalBtn()
UpdateSessionBtn()

function UpdateLocalBtn() {
    localStorage.setItem('LocalInt', LocalInt)
    LocalBtn.textContent = `Ця кнопка була натиснута: ${localStorage.getItem('LocalInt')} раз`
}

function UpdateSessionBtn() {
    sessionStorage.setItem('SessionInt', SessionInt)
    SessionBtn.textContent = `Ця кнопка була натиснута: ${sessionStorage.getItem('SessionInt')} раз`
}

LocalBtn.addEventListener('click', ()=>{
    LocalInt++
    UpdateLocalBtn()
})

SessionBtn.addEventListener('click', ()=>{
    SessionInt++
    UpdateSessionBtn()
})

document.querySelector('#ClearBtn').addEventListener('click', ()=>{
    LocalInt = 0
    SessionInt = 0
    localStorage.clear()
    sessionStorage.clear()
    UpdateLocalBtn()
    UpdateSessionBtn()
})