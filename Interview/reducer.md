A **Reducer** is a **pure function** that takes the **current state** and an **action**, then returns a **new state**. It is commonly used in **Redux** and React's `useReducer` hook for state management.

### Syntax

```javascript
function reducer(state, action) {
    // Update state based on action
    return newState;
}
```

### Parameters

| Parameter | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `state`   | The current state of the application.                                          |
| `action`  | An object that describes what should happen. It usually has a `type` property. |

### Flow

```
Current State + Action
          │
          ▼
      Reducer Function
          │
          ▼
       New State
```

### Example

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        default:
            return state;
    }
}
```

### Using `useReducer`

```javascript
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>{state.count}</h2>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>
        </>
    );
}
```

### How it works

1. Initial state is `{ count: 0 }`.
2. User clicks **Increment**.
3. `dispatch({ type: "INCREMENT" })` sends an action.
4. The reducer receives:

   ```javascript
   state = { count: 0 }
   action = { type: "INCREMENT" }
   ```
5. The reducer returns:

   ```javascript
   { count: 1 }
   ```
6. React updates the UI with the new state.

### Why use a Reducer?

* Keeps state update logic in one place.
* Easier to manage **complex state**.
* Predictable because it is a **pure function**.
* Used by **Redux** and React's `useReducer`.

### Real-life analogy

Imagine a **bank account**:

* **State** → Your current balance (₹10,000)
* **Action** → Deposit ₹500
* **Reducer** → Calculates the new balance
* **New State** → ₹10,500

The reducer doesn't change the old balance directly. It calculates and returns a **new balance** based on the action.

### Key Points

* A reducer is a **pure function**.
* It receives **state** and **action**.
* It returns a **new state**.
* It should **never modify the existing state directly**.
* It is commonly used with **Redux** and React's **`useReducer`** hook.
