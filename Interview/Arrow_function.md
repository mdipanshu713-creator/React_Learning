Excellent question. This is something that confuses many beginners.

There are **three different arrow function styles**.

---

# 1. Arrow Function with `{}`

```javascript
const add = (a, b) => {
    return a + b;
};
```

Here:

* `{}` = Function body
* `return` is **required**

Equivalent to:

```javascript
function add(a, b) {
    return a + b;
}
```

---

# 2. Arrow Function without `{}`

```javascript
const add = (a, b) => a + b;
```

There is **no function body**.

JavaScript automatically returns the expression.

It is equivalent to:

```javascript
const add = (a, b) => {
    return a + b;
};
```

This is called an **implicit return**.

---

# 3. Why do we use `()` after `=>`?

Look at this:

```javascript
(prevTodo) => (
    prevTodo.id === id ? todo : prevTodo
)
```

Many people think `()` means a function body. **It does not.**

Here, the parentheses are just used to **group the expression** and make it easier to read.

It is exactly the same as writing:

```javascript
(prevTodo) => prevTodo.id === id ? todo : prevTodo
```

or

```javascript
(prevTodo) => {
    return prevTodo.id === id ? todo : prevTodo;
}
```

All three are equivalent.

---

# In Your React Code

```javascript
setTodos((prev) =>
    prev.map((prevTodo) =>
        (prevTodo.id === id ? todo : prevTodo)
    )
);
```

Let's rewrite it with `{}`.

```javascript
setTodos((prev) => {
    return prev.map((prevTodo) => {
        return prevTodo.id === id ? todo : prevTodo;
    });
});
```

These two versions do exactly the same thing.

---

# Why use `()`?

Mainly for readability.

Example:

Without parentheses:

```javascript
(prevTodo) => prevTodo.id === id ? todo : prevTodo
```

With parentheses:

```javascript
(prevTodo) => (
    prevTodo.id === id ? todo : prevTodo
)
```

The second version is easier to read, especially when the expression spans multiple lines.

---

# Very Common in React

### JSX

```jsx
users.map((user) => (
    <li>{user.name}</li>
));
```

is equivalent to

```jsx
users.map((user) => {
    return <li>{user.name}</li>;
});
```

React developers usually prefer the first style because it is shorter and cleaner.

---

# Easy Rule to Remember

| Syntax              | Meaning                                                                            |
| ------------------- | ---------------------------------------------------------------------------------- |
| `=> { }`            | Function body. Use `return` if you want to return a value.                         |
| `=> expression`     | Automatically returns the expression (implicit return).                            |
| `=> ( expression )` | Also automatically returns the expression. `()` are just for grouping/readability. |

---

## Interview Answer

If an interviewer asks:

> **Why do we write `=> ()` instead of `=> {}`?**

You can answer:

> **"`=> {}` creates a function body, so we must use the `return` keyword to return a value. `=> ()` is an implicit return. The parentheses are only used to wrap the returned expression and improve readability. Both forms return the same result, but `=> ()` is shorter and is commonly used in React, especially with `map()` and JSX."**
