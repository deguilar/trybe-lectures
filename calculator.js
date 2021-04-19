
function calculator(number1, number2, action) {
    if(action === '-') {
        return number1 - number2
    }
    if(action === '*') {
        return number1 * number2
    }
    if(action === '/') {
        if(number2 === 0) {
            throw new Error('nao pode dividir por 0')
        }
        return number1 / number2
    }
    return number1 + number2
}

module.exports = calculator;