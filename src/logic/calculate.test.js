import calculate from './calculate';

let obj = {
  total: null,
  next: null,
  operation: null,
};

describe('if calculator works well', () => {
  it('subtraction works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: '-',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('2');
  });
  it('addition works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: '+',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('6');
  });
  it('division works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: '-',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('2');
  });
  it('multiplication works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: 'x',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('8');
  });
});
