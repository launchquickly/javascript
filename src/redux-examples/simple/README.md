# redux - simple examples

## Basic set-up

Adding rddux tookit as a dependcy to package.json by running:
```
npm install @reduxjs/toolkit
```

## Examples

### Basic example

counter.js provides an example of a reducer function that can calculate the new value (state) of a counter when either incremented or decremented
actions are performed.

The actions defined within the reducer are then exported and the store created configured with the reducer.

Finally a number of incremented and decremented actions are dispatched update the value (state) of the counter.

See [Basic Example](https://redux.js.org/introduction/getting-started) in the redux website for further details.

## Other Notes

The esm module loader helps us to use the es6 imports in node.js instead of commonjs require() function and module.exports.

You can install it with:
```
npm install esm
```

and you should not be able to run javascript files containing imports using:
```
node -r esm app.js
```

## References

- [Redux official website](https://redux.js.org/)
- [Redux Essentials tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
