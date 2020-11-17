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
sum.test.js contains an example of using ```expect``` and ```toBe``` to test exact equality.



## References

* [Jest official website](https://jestjs.io)
* [Jest docs](https://jestjs.io/docs/en/getting-started.html)