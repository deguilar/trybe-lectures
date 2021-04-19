const convertToRoman = require('./roman-numerals');
const assert = require('assert');
const { it, expect } = require('@jest/globals');


describe('teste inicial', () => {
    test('eu vou testar a funcao convertToRoman', () => {
        const myFunctionIsDefined = typeof convertToRoman
    
        expect(myFunctionIsDefined).toBe('function')
    
    })
})

describe('testando os numeros ate 20', () => {
    test('Testar todos os numeros 1 a 4', () => {
        const numerOneInRoman = convertToRoman(1)
        expect(numerOneInRoman).toBe('I')
    
        expect(convertToRoman(2)).toBe('II')
    
        expect(convertToRoman(3)).toBe('III')
    
        expect(convertToRoman(4)).toBe('IV')
    
        expect(convertToRoman(33)).not.toBe('III')
    })
    
    test('Testar todos os numeros 5 ao 9', () => {
    
        expect(convertToRoman(5)).toBe('V')
    
        expect(convertToRoman(6)).toBe('VI')
    
        expect(convertToRoman(7)).toBe('VII')
    })
})


test('Testar toequal', () => {
    
    const a = {
        x: 3
    }

    const b = a

    const c = {
        x: 3
    }

    expect(b).toBe(a)
    expect(c).toEqual(a)
})



// assert.equal(typeof convertToRoman, 'function');
// assert.equal(convertToRoman(1), 'I');
// assert.equal(convertToRoman(2), 'II');
// assert.equal(convertToRoman(3), 'III');
// assert.equal(convertToRoman(4), 'IV');

// assert.equal(convertToRoman(5), 'V');
// assert.equal(convertToRoman(6), 'VI');
// assert.equal(convertToRoman(7), 'VII');
// assert.equal(convertToRoman(8), 'VIII');
// assert.equal(convertToRoman(9), 'IX');

// assert.equal(convertToRoman(10), 'X');
// assert.equal(convertToRoman(11), 'XI');
// assert.equal(convertToRoman(12), 'XII');
// assert.equal(convertToRoman(13), 'XIII');
// assert.equal(convertToRoman(14), 'XIV');
// assert.equal(convertToRoman(15), 'XV');
// assert.equal(convertToRoman(26), 'XXVI');
// assert.equal(convertToRoman(43), 'XLIII');

// assert.equal(convertToRoman(50), 'L');
// assert.equal(convertToRoman(55), 'LV');
// assert.equal(convertToRoman(76), 'LXXVI');

// assert.equal(convertToRoman(100), 'C');
// assert.equal(convertToRoman(200), 'CC');
// assert.equal(convertToRoman(227), 'CCXXVII');

// assert.equal(convertToRoman(500), 'D');
// assert.equal(convertToRoman(576), 'DLXXVI');
// assert.equal(convertToRoman(981), 'CMLXXXI');

// assert.equal(convertToRoman(1000), 'M');
// assert.equal(convertToRoman(2999), 'MMCMXCIX');
// assert.equal(convertToRoman(3000), 'MMM');
