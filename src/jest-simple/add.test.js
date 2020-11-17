const { TestScheduler } = require("jest");

const add = require('./add');

test('object assignment', () => {
    const data = { one: 1 };
    add(data, 'two', 2);
    expect(data).toEqual({ one: 1, two: 2 });
});