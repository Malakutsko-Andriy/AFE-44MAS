const GamesContainer = document.querySelector('#Games')
const ArrayGames = ['Factorio', 'Minecraft', 'Terraria', 'Stardew Valley', 'Dead Cells']
GamesContainer.innerHTML = 'Мої улюблені ігри це : ' + ArrayGames.join(' , ')
let RandomNumberArray = []
let MinNumber = 20
let MaxNumber = 0
const NumberContainer = document.querySelector('#ArrayNumber')
const MinNumberContainer = document.querySelector('#MinNumber')
const MaxNumberContainer = document.querySelector('#MaxNumber')
let SumNumbers = 0
let AverageValue = 0
const AverageValueContainer = document.querySelector('#AverageValue')

function RandomNumber() {
    if (RandomNumberArray.length == 0) {
        for (let i = 0; i < 20; i++) {
            RandomNumberArray.push(Math.floor(Math.random() * 20) + 1)
            if (i < 19) {
                SumNumbers = SumNumbers + RandomNumberArray[i]
            } else {
                SumNumbers = SumNumbers + RandomNumberArray[i]
                AverageValue = SumNumbers / 20
            }
            if (MinNumber >= RandomNumberArray[i]) {
                MinNumber = RandomNumberArray[i]
            }
            if (MaxNumber <= RandomNumberArray[i]) {
                MaxNumber = RandomNumberArray[i]
            }
        }
        NumberContainer.textContent = 'Випадкові числа  : ' + RandomNumberArray.join(' , ');
        MinNumberContainer.textContent = 'З них най менше : ' + MinNumber
        MaxNumberContainer.textContent = 'З них най більше : ' + MaxNumber
        AverageValueContainer.textContent = 'Середнє значення : ' + AverageValue
    } else {
        RandomNumberArray = []
        MinNumber = 20
        MaxNumber = 0
        SumNumbers = 0
        AverageValue = 0
        RandomNumber()
    }
}
