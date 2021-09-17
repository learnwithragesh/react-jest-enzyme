const { add, subtract, multiply, divide } = require('./calculations');

test('adds 1 + 2 equals 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtract 2 - 1 equals 1', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('multiply 1 * 2 equals 2', () => {
    expect(multiply(1, 2)).toBe(2);
});

test('divide 2 / 2 equals 1', () => {
    expect(divide(2, 2)).toBe(1);
});