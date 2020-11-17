const trouble = require('./trouble');

test('will there be trouble reported', () => {
    expect(() => trouble()).toThrow();
    expect(() => trouble()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => trouble()).toThrow('I knew there would be trouble!!!');
    expect(() => trouble()).toThrow(/trouble/);
});