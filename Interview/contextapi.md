I think you mean **Context API** (not "Connect API").

The **React Context API** is a way to **share data between multiple components without passing props manually at every level**.

---

## Why do we need Context API?

Imagine this component structure:

```
App
│
├── Navbar
│
├── Home
│   └── Profile
│       └── UserInfo
```

Suppose `UserInfo` needs the logged-in user's name.

### Without Context API (Prop Drilling)

You have to pass the data through every component:

```jsx
<App user={user}>
   <Home user={user}>
      <Profile user={user}>
         <UserInfo user={user} />
      </Profile>
   </Home>
</App>
```

Even though `Home` and `Profile` don't use `user`, they must pass it down. This is called **prop drilling**.

---

## With Context API

React stores the data in a central place.

```
        Context
           │
 ┌─────────┼─────────┐
 │         │         │
Navbar   Home    UserInfo
```

Now any component can access the data directly.

```jsx
const user = useContext(UserContext);
```

No need to pass props through every intermediate component.

---

## Three Steps to Use Context API

### 1. Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

---

### 2. Provide Data

```jsx
<UserContext.Provider value={{ name: "Dipanshu" }}>
    <App />
</UserContext.Provider>
```

The `Provider` shares the data with all components inside it.

---

### 3. Consume Data

```jsx
import { useContext } from "react";

const user = useContext(UserContext);

return <h1>{user.name}</h1>;
```

---

## Real-Life Example

Imagine a **college**.

* **Principal's office** = Context Provider
* **Notice** = Shared data
* **Teachers and students** = Components

Instead of each teacher asking another teacher for the notice, everyone reads the same notice directly from the principal's office.

```
Principal Office
        │
    Notice Board
   ┌────┼────┐
Teacher Student Clerk
```

Everyone gets the same information directly.

---

## Another Example: Theme

```jsx
<ThemeContext.Provider value="dark">
```

Any component can access it:

```jsx
const theme = useContext(ThemeContext);
```

---

## When should you use Context API?

Use it for data that many components need, such as:

* User login information
* Theme (Light/Dark mode)
* Language
* Shopping cart
* Authentication status

---

## Context API vs Props

| Props                          | Context API              |
| ------------------------------ | ------------------------ |
| Pass data from parent to child | Share data globally      |
| Can cause prop drilling        | Avoids prop drilling     |
| Best for a few components      | Best for many components |

---

### Remember this sentence

> **Props pass data one component at a time. Context API shares data with all components that need it.**

Since you've already built a **Todo App using Context API**, the next concepts you should learn are:

1. `useEffect()`
2. React Router
3. Fetch API / Axios
4. Redux Toolkit

These will take you to the next level in React.
