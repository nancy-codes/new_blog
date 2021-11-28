---
category: 'blog'
title: 'Release Zalgo'
description: 'Avoid anti-pattern in asynchrony'
date: '2021-11-25'
tags: ['async', 'callbacks', 'phases', 'timers']
published: true
---

A function should run either synchronously (i.e., in the same stack) or asynchronously (i.e., in a new stack). It can't be both. Otherwise, the inconsistent behavior might result in an unexpected error.

To ensure that a callback runs always asynchronously, `process.nextTick` API can be used.

Here is an example: compare the two scripts.


1\. **Inconsistent**

- Depending on the count value, the call back can run sync or async.

```js
const assert = require("assert");

function foo(count, callback) {
  if (count <= 0) {
    return callback(new TypeError("count > 0"));
  }
  setTimeout(callback, count);
}

let bar = false;
foo(0, () => {
  assert(bar);
});
bar = true;
console.log(bar);


```

Console.log

```
AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:
```

2. Consistent with process.nextTick

```js
const assert = require("assert");

function foo(count, callback) {
  if (count <= 0) {
    return process.nextTick(() => callback(new TypeError("count > 0")));
  }
  setTimeout(callback, count);
}

let bar = false;
foo(0, () => {
  assert(bar);
});
bar = true;
console.log(bar);

```

Console.log

```
true
```
