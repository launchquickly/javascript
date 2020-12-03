# redux - simple examples

## Basic set-up

Adding rddux tookit as a dependcy to package.json by running:
```
npm install @reduxjs/toolkit
```

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
