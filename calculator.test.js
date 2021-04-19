const { expect } = require('@jest/globals');
const calculator = require('./calculator');

describe('verificar que a funcao exista', () => {
    test('verifica que a funcao calculator existe', () => {
        const myFunctionExists = typeof calculator
        expect(myFunctionExists).toBe('function')
    })
})

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