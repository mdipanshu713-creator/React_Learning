Here's the same functionality using **plain vanilla JavaScript and the DOM** (no React) — this shows what React is actually doing under the hood.

## Full working DOM example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Vanilla JS Input Example</title>
</head>
<body>

  <input type="text" id="usernameInput" placeholder="Enter username">
  <p>You typed: <span id="displayUsername"></span></p>

  <script>
    // Step 1: Get references to DOM elements
    const inputEl = document.getElementById("usernameInput");
    const displayEl = document.getElementById("displayUsername");

    // Step 2: Keep track of the value manually (like React state)
    let username = "";

    // Step 3: Listen for changes on the input
    inputEl.addEventListener("input", function(e) {
      username = e.target.value;   // same as e.target.value in React
      displayEl.textContent = username;  // manually update the DOM
      console.log(username);
    });
  </script>

</body>
</html>
```

## What's happening, step by step

1. `document.getElementById("usernameInput")` — grabs the actual `<input>` element from the DOM tree.
2. `addEventListener("input", ...)` — attaches a listener that fires on **every keystroke** (same event React normalizes `onChange` to).
3. Inside the handler, `e` is the native **Event object** — `e.target` is the `<input>` element itself, `e.target.value` is its current text.
4. You manually store it in a variable (`username`) and manually push it back into the DOM (`displayEl.textContent = username`).

## The key difference from React

| Vanilla JS/DOM | React |
|---|---|
| You manually select elements (`getElementById`) | React tracks elements internally via Virtual DOM |
| You manually update the DOM after state changes | React re-renders automatically when state changes |
| You manage `username` as a plain variable | `useState` gives you `username` + `setUsername` |
| One-way: DOM → variable → DOM (manual) | Two-way binding is automatic via state + JSX |

React's `value={username}` + `onChange={...}` pattern is essentially **automating** the exact two lines you see above (`e.target.value` capture + `.textContent` update) — except React does the DOM update part for you via re-rendering, instead of you writing `displayEl.textContent = ...` by hand every time.

Want to see the same thing built as a small login form in both vanilla JS and React side-by-side, so the contrast is clearer?