## What is Routing in React? (Simple Interview Answer)

**Definition:**
Routing in React is the process of displaying different components (pages) based on the URL without reloading the entire website.

### Real-life example

Think of a shopping mall.

* **Home** → Ground Floor
* **Products** → First Floor
* **Contact** → Second Floor

When you move between floors, the building doesn't change—only the floor you're viewing changes.

React Router works the same way:

* The website stays loaded.
* Only the required component (page) changes.

---

## Without Routing

Suppose your website has three pages:

* Home
* About
* Contact

Without React Router, clicking a link reloads the entire page.

```
User clicks About
        ↓
Browser reloads
        ↓
New page loads
```

---

## With React Router

```
User clicks About
        ↓
URL changes (/about)
        ↓
React displays About component
        ↓
No full page reload
```

This makes the application faster and provides a smoother user experience.

---

## Basic Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Simple English Logic

```
If URL is "/"
    Show Home component

If URL is "/about"
    Show About component
```

---

## Common React Router Components

| Component       | Purpose                                        |
| --------------- | ---------------------------------------------- |
| `BrowserRouter` | Enables routing in the React app               |
| `Routes`        | Holds all routes                               |
| `Route`         | Maps a URL to a component                      |
| `Link`          | Navigates without reloading the page           |
| `NavLink`       | Like `Link`, but can highlight the active page |
| `useNavigate()` | Navigate programmatically using JavaScript     |
| `useParams()`   | Read URL parameters (e.g., user ID)            |

---

## Example of `Link`

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

Clicking these links changes the URL without refreshing the page.

---

## Interview Definition (1-minute answer)

> "Routing in React is a way to navigate between different pages or components based on the URL. We use the `react-router-dom` library to implement routing. It allows users to move between pages without reloading the entire application, making Single Page Applications (SPAs) fast and responsive."

---

## One-line Memory Trick

> **Routing = URL → Matching Component**

For example:

```
"/"         → Home
"/about"    → About
"/contact"  → Contact
"/user/101" → User Component
```

This is the core idea of React routing.


<!-- 7.17 -->