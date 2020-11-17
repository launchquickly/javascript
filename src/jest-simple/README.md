# jest - simple examples

## Basic set-up

Adding jest as a dev depend to package.json by running:
```
npm install --save-dev jest
```

Add the following to package.json to allow jest to be run using ```npm test```
```
  "scripts": {
    "test": "jest"
  },
```

## Matchers

### Exact equality

sum.test.js contains an example of using [expect](https://jestjs.io/docs/en/expect#expectvalue) and [toBe](https://jestjs.io/docs/en/expect#tobevalue) to test exact equality.

### Check value of an object

add.test.js contains an example of using [expect](https://jestjs.io/docs/en/expect#expectvalue) and [toEqual](https://jestjs.io/docs/en/expect#toequalvalue) to test the value of an object. It will recursively check every field of an object or array.

### Test the opposite of a matcher

[not](https://jestjs.io/docs/en/expect#not) can be used to test the opposite of a matcher, e.g.
```
expect(a + b).not.toBe(0);
```

### Comparing numbers

sum.test.js contains an examples of using [expect](https://jestjs.io/docs/en/expect#expectvalue) and various matchers to perform comparisons on numbers such as >, <, >= and <=, as well as [toBeCloseTo](https://jestjs.io/docs/en/expect#tobeclosetonumber-numdigits) for use with floating point number comparison.

### Matching strings

msg.test.js contains examples of using [expect](https://jestjs.io/docs/en/expect#expectvalue) and [toMatch](https://jestjs.io/docs/en/expect#tomatchregexp--string) to check strings using regular expressions.

### Exception detection

trouble.test.js contains examples of using [expect](https://jestjs.io/docs/en/expect#expectvalue) and [toThrow](https://jestjs.io/docs/en/expect#tothrowerror) to
test whether a particular error is thrown as well as the error message contents.

## References

- [Jest official website](https://jestjs.io)
- [Jest docs](https://jestjs.io/docs/en/getting-started.html)
- [expect API](https://jestjs.io/docs/en/expect)