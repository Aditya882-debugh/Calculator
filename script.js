
const NumberButtons = document.querySelectorAll('[data-number]')
const OperationButtons = document.querySelectorAll('[data-operation]')
const AllClearbutton = document.querySelector('[data-all-clear]')
const DeleteButton = document.querySelector('[data-delete]')
const equalsbutton = document.querySelector('[data-equal]')
const output = document.querySelector('[data-current-operand]')

NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (output.innerText.includes("Error")) {
            output.innerText = ''
        }
        if (output.innerText.includes("Infinity")) {
            output.innerText = ''
        }
        output.innerText = output.innerText + button.innerText
    })
})
OperationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (output.innerText.includes("Error")) {
            output.innerText = ''
        }
        if (output.innerText.includes("Infinity")) {
            output.innerText = ''
        }
        output.innerText = output.innerText + button.innerText
    })
})
equalsbutton.addEventListener('click', () => {

    try {
        output.innerText = eval(output.innerText);
    } catch {
        output.innerText = "Error"
    }
    if (output.innerText.includes("Error")) {
        output.innerText = "Error"
    }

})
DeleteButton.addEventListener('click', () => {
    if (output.innerText.includes("Error")) {
        output.innerText = ''
    }
    if (output.innerText.includes("Infinity")) {
        output.innerText = ''
    }
    output.innerText = output.innerText.slice(0, -1)

})
AllClearbutton.addEventListener('click', () => {
    output.innerText = ''
})
