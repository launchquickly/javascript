const { TestScheduler } = require('jest');
const shoppingList = require('./shoppinglist');
const shoppinglist = require('./shoppinglist');

test('the shopping list has beer in it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

test('the shopping list has kleenex and paper towels in it', () => {
    const expected = ['kleenex', 'paper towels'];

    expect(shoppingList).toEqual(expect.arrayContaining(expected));
});

test('the shopping list does not have both kleenex and wine in it', () => {
    const expected = ['kleenex', 'wine'];

    expect(shoppingList).not.toEqual(
        expect.arrayContaining(expected)
    );
});