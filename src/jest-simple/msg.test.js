const { TestScheduler } = require("jest");

const message = require('./msg');

test('no two are one', () => {
    const value = message(1);

    expect(value).not.toMatch(/two/);
});

test('not yet mapped', () => {
    const value = message(3);
    
    expect(value).toMatch(/not recognised/);
});
