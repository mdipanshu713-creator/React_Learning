The **spread operator (`...`)** in JavaScript is used to **expand (spread) the elements** of an array, object, or iterable into individual elements.

## Syntax

```javascript
...
```

---

## 1. Spread Operator with Arrays

### Example 1: Copy an Array

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);
```

**Output**

```
[1, 2, 3]
```

Here, `arr2` is a **new copy** of `arr1`.

---

### Example 2: Merge Arrays

```javascript
const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];

console.log(c);
```

**Output**

```
[1, 2, 3, 4]
```

---

### Example 3: Add New Elements

```javascript
const numbers = [2, 3, 4];

const newNumbers = [1, ...numbers, 5];

console.log(newNumbers);
```

**Output**

```
[1, 2, 3, 4, 5]
```

---

## 2. Spread Operator with Objects

### Example 1: Copy Object

```javascript
const person = {
    name: "Dipanshu",
    age: 25
};

const copy = {
    ...person
};

console.log(copy);
```

**Output**

```javascript
{
  name: "Dipanshu",
  age: 25
}
```

---

### Example 2: Merge Objects

```javascript
const student = {
    name: "Rahul"
};

const marks = {
    score: 90
};

const result = {
    ...student,
    ...marks
};

console.log(result);
```

**Output**

```javascript
{
  name: "Rahul",
  score: 90
}
```

---

### Example 3: Override Properties

```javascript
const person = {
    name: "Rahul",
    age: 20
};

const updatedPerson = {
    ...person,
    age: 21
};

console.log(updatedPerson);
```

**Output**

```javascript
{
  name: "Rahul",
  age: 21
}
```

The later value (`age: 21`) overrides the earlier one.

---

## 3. Spread Operator in Function Calls

```javascript
const nums = [10, 20, 30];

function add(a, b, c) {
    return a + b + c;
}

console.log(add(...nums));
```

**Output**

```
60
```

Without the spread operator:

```javascript
add(nums); // Wrong
```

With the spread operator:

```javascript
add(...nums); // Correct
```

---

## 4. Convert String into Characters

```javascript
const str = "Hello";

const chars = [...str];

console.log(chars);
```

**Output**

```
["H", "e", "l", "l", "o"]
```

---

## Spread vs Rest Operator

Although both use `...`, they have different purposes.

| Spread Operator                                        | Rest Operator                                |
| ------------------------------------------------------ | -------------------------------------------- |
| Expands elements                                       | Collects elements                            |
| Used while calling functions or copying arrays/objects | Used in function parameters or destructuring |
| Example: `console.log(...arr)`                         | Example: `function sum(...nums){}`           |

### Spread Example

```javascript
const arr = [1, 2, 3];

console.log(...arr);
```

**Output**

```
1 2 3
```

### Rest Example

```javascript
function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);
```

**Output**

```
[10, 20, 30]
```

---

## Interview Questions

### Q1. What is the spread operator?

**Answer:** The spread operator (`...`) expands the elements of an array, object, or iterable into individual elements.

### Q2. Can the spread operator copy an object?

**Answer:** Yes.

```javascript
const obj2 = { ...obj1 };
```

### Q3. What is the difference between spread and rest operators?

**Answer:**

* **Spread (`...`)** expands elements.
* **Rest (`...`)** collects multiple elements into a single array.

### Q4. Does the spread operator create a deep copy?

**Answer:** **No.** It creates a **shallow copy**.

```javascript
const obj1 = {
    name: "A",
    address: {
        city: "Mumbai"
    }
};

const obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1.address.city);
```

**Output**

```
Delhi
```

This happens because nested objects are still shared between the original and the copied object.

### Memory Trick

* **Spread = Spread Out (Expand)** 📤
* **Rest = Rest Together (Collect)** 📥
