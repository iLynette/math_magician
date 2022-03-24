import operate from "./operate";

describe('operation functions', () => {
    test('division', () => {
        const result = operate('10', '2', '÷');
        expect(result).toBe('5')
    })
})