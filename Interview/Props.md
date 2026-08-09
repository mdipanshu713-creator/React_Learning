For interviews, you should understand **what props are, why they are used, how they work internally, and be able to write a small example**.

---

# What are Props in React?

**Definition (Interview Answer):**

> **Props (Properties)** are read-only data passed from a **parent component** to a **child component**. They allow components to become reusable and dynamic by displaying different data without changing the component's code.

---

# Real-Life Example

Imagine a teacher giving report cards.

The **teacher** is the Parent Component.

The **students** are Child Components.

The teacher gives each student different marks.

```
Teacher (Parent)

      │
      ├──────────────► Student 1
      │                  Marks = 85
      │
      ├──────────────► Student 2
      │                  Marks = 92
      │
      └──────────────► Student 3
                         Marks = 76
```

The students don't create their own marks—they receive them from the teacher.

Similarly,

```
Parent Component

↓

Passes Props

↓

Child Component
```

---

# Why do we use Props?

Suppose you create a Student component.

Without props:

```jsx
function Student() {
    return <h1>Dipanshu</h1>;
}
```

Using it three times:

```jsx
<Student />
<Student />
<Student />
```

Output

```
Dipanshu
Dipanshu
Dipanshu
```

Not useful because every student is the same.

---

With props

```jsx
function Student(props) {
    return <h1>{props.name}</h1>;
}
```

Now

```jsx
<Student name="Dipanshu" />
<Student name="Rahul" />
<Student name="Priya" />
```

Output

```
Dipanshu
Rahul
Priya
```

One component.

Different data.

---

# Raw Logic

When React sees

```jsx
<Student name="Dipanshu" age={25} />
```

React internally creates an object.

```js
props = {
    name: "Dipanshu",
    age: 25
}
```

Then calls

```jsx
Student(props)
```

which becomes

```jsx
Student({
    name: "Dipanshu",
    age: 25
})
```

Inside

```jsx
function Student(props) {

    console.log(props);

}
```

Output

```js
{
   name: "Dipanshu",
   age: 25
}
```

---

# Accessing Props

```jsx
function Student(props){

    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </>
    )

}
```

---

# Using Destructuring (Most Common)

Instead of

```jsx
props.name
props.age
```

Write

```jsx
function Student({name, age}){

    return(
        <>
            <h2>{name}</h2>
            <p>{age}</p>
        </>
    )

}
```

This is cleaner and is commonly used in React projects.

---

# Types of Props

## 1. String

```jsx
<Student name="Dipanshu"/>
```

---

## 2. Number

```jsx
<Student age={25}/>
```

---

## 3. Boolean

```jsx
<Student isPresent={true}/>
```

---

## 4. Array

```jsx
<Student marks={[80,90,95]}/>
```

---

## 5. Object

```jsx
<Student student={{
    name:"Dipanshu",
    age:25
}}/>
```

---

## 6. Function

```jsx
<Student
    greet={() => alert("Hello")}
/>
```

---

# Props Flow

Props always move in one direction.

```
Parent

↓

Props

↓

Child
```

Child cannot directly modify props.

This is called **One-Way Data Flow**.

---

# Props are Read-Only

Wrong

```jsx
props.name = "Rahul";
```

❌ Never modify props.

Correct

Parent changes the value.

```jsx
<Student name="Rahul"/>
```

React sends the updated prop to the child.

---

# Difference Between Props and State

| Props              | State                        |
| ------------------ | ---------------------------- |
| Passed from parent | Managed inside the component |
| Read-only          | Can be updated               |
| Used to send data  | Used to store changing data  |
| Parent controls it | Component controls it        |

---

# Example From Your Currency Converter

```jsx
<InputBox
    label="From"
    amount={amount}
    currencyOptions={options}
    selectCurrency={from}
/>
```

React creates

```js
props = {
    label: "From",
    amount: amount,
    currencyOptions: options,
    selectCurrency: from
}
```

Inside `InputBox`

```jsx
function InputBox(props){

    console.log(props.label);

}
```

Output

```
From
```

---

# Interview Questions

### Q1. What are Props?

**Answer:**

> Props are read-only data passed from a parent component to a child component. They make components reusable and dynamic.

---

### Q2. Can we modify Props?

**Answer:**

> No. Props are immutable (read-only). Only the parent component can change the values it passes.

---

### Q3. Why are Props needed?

**Answer:**

> Props allow the same component to display different data, reducing code duplication and improving reusability.

---

### Q4. Can we pass functions as Props?

**Answer:**

> Yes. Functions are commonly passed as props so that child components can notify or trigger actions in the parent component, such as handling button clicks or input changes.

---

# Interview Summary (30-second Answer)

> **Props (Properties) are read-only inputs to a React component. They are used to pass data and functions from a parent component to a child component. Props make components reusable, configurable, and support React's one-way data flow. A child component receives props but does not modify them; if the data needs to change, the parent updates the props and React re-renders the child.**

This answer covers both the conceptual understanding and the practical behavior that interviewers typically look for.
