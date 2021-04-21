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

describe('soma', () => {
    test('verifica que 2 + 2 é 4', () => {
        const result = calculator(2,2)
        expect(result).toBe(4)
    })

    test('verifica que 3 + 3 é 6', () => {
        const result = calculator(3,3)
        expect(result).toBe(6)
    })

    test('verifica que 100 + 1000 é 1100', () => {
        const result = calculator(100,1000)
        expect(result).toBe(1100)
    })
})

describe('subtracao', () => {
    test('verifica que 2 - 2 é igual a 0', () => {
        const result = calculator(2,2, '-')
        expect(result).toBe(0)
    })

    test('verifica que 10 - 5 é igual a 5', () => {
        const result = calculator(10,5, '-')
        expect(result).toBe(5)
    })
})

describe('divisao', () => {
    test('verifica que 10 / 5 é igual a 2', () => {
        const result = calculator(10,5, '/')
        expect(result).toBe(2)
    })

    test('verifica que 10 / 0 lance um erro', () => {
       expect(() => calculator(10,0, '/'))
        .toThrowError(new Error('nao pode dividir por 0'));
    })
}) 