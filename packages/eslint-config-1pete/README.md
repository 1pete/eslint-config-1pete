# eslint-config-1pete

[![npm version](https://badge.fury.io/js/eslint-config-1pete.svg)](https://badge.fury.io/js/eslint-config-1pete)

Just another eslint config

This config is almost the same with [airbnb's style guide](https://github.com/airbnb/javascript), except some rules are overridden. This config also use config based from airbnb's repo's master branch, so it will be latest regardless what publishes to npm registry.

### How to install
```bash
npm i -D eslint eslint-config-1pete
// or
yarn add --dev eslint eslint-config-1pete
```

### Overridden rules
1. [class-methods-use-this](#class-methods-use-this)
1. [implicit-arrow-linebreak](#implicit-arrow-linebreak)
1. [no-await-in-loop](#no-await-in-loop)
1. [no-restricted-syntax](#no-restricted-syntax)
1. [no-unused-vars](#no-unused-vars)
1. [prefer-const](#prefer-const)
1. [semi](#semi)

#### class-methods-use-this
this allows class function without using `this`
```js
class A {
  run() {
    doSomething()
  }
}
```

#### implicit-arrow-linebreak
this allows both following patterns
```js
const fn = () => 10
const fn2 = () =>
  10
```

#### no-await-in-loop
this allows using await in loop
```js
for (const job of jobList) {
  // run one job at a time
  await job.execute()
}
```

#### no-restricted-syntax
this allows for-of statements, in case of high-order functions of array cannot be used to complete task
```js
for (const job of jobList) {
  // run one job at a time
  await job.execute()
}
```

#### no-unused-vars
this allows unused arguments in function with name starts with `_`
```js
app.use((error, req, res, _next) => {
  if (error) res.end('error')
  else res.end('ok')
})
```

#### prefer-const
this allows variables declared using `let` keyword regardless whether they are reassigned after the initial assignment.
```js
const a = 10
let b = 10
```

#### semi
this disallows semicolons as the end of statements (except to disambiguate statements)
```js
const a = 10
```
