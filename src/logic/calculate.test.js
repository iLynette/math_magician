import calculate from "./calculate";

let obj = {
    total: null,
    next: null,
    operation: null,
};

describe('if calculator works well', () => {
    it('division works properly', () => {
        obj = {
            total: '4',
            next: '2',
            operation: '-',
        }
        const {total} = calculate(obj, '=');
        expect(total).toBe('2');
    })
})