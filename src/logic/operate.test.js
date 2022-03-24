import operate from './operate';

describe('operation functions', () => {
  test('division', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });
  test('addition', () => {
    const result = operate('6', '2', '+');
    expect(result).toBe('8');
  });
  test('subtraction', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });
  test('multiplication', () => {
    const result = operate('2', '2', 'x');
    expect(result).toBe('4');
  });
});
