function Start() {
    const NumberA = Number(document.querySelector("#NumberA").value)
    const NumberB = Number(document.querySelector("#NumberB").value)
    const Actions = document.querySelector("#Action").value
    const ResultContainer = document.getElementById("ResultContainer")
    if (Actions == "+") {
        let Result = (NumberA * 10 + NumberB * 10) /10
        ResultContainer.textContent = Result
    } else if (Actions == "-") {
        let Result = (NumberA * 10 - NumberB * 10) /10
        ResultContainer.textContent = Result
    } else if (Actions == "*"){
        let Result = ((NumberA * 10 )*(NumberB * 10)) /10
        ResultContainer.textContent = Result
    } else if (Actions == "/") {
        let Result = ((NumberA * 10 )/(NumberB * 10)) /10
        ResultContainer.textContent = Result
    }  else if (Actions == "<") {
        let Result = NumberA < NumberB
        if (Result == true) {
            ResultContainer.textContent = "Правда"
        } else if (Result == false) {
            ResultContainer.textContent = "Хиба"
        }
    }  else if (Actions == ">") {
        let Result = NumberA > NumberB
        if (Result == true) {
            ResultContainer.textContent = "Правда"
        } else if (Result == false) {
            ResultContainer.textContent = "Хиба"
        }
    }  else if (Actions == "=") {
        let Result = NumberA == NumberB
        if (Result == true) {
            ResultContainer.textContent = "Правда"
        } else if (Result == false) {
            ResultContainer.textContent = "Хиба"
        }
    }  else if (Actions == "<=") {
        let Result = NumberA <= NumberB
        if (Result == true) {
            ResultContainer.textContent = "Правда"
        } else if (Result == false) {
            ResultContainer.textContent = "Хиба"
        }
    }  else if (Actions == ">=") {
        let Result = NumberA >= NumberB
        if (Result == true) {
            ResultContainer.textContent = "Правда"
        } else if (Result == false) {
            ResultContainer.textContent = "Хиба"
        }
    } 
    else {
        alert("Error")
        console.log(Actions)
        console.log(NumberA)
        console.log(NumberB)
    }
}