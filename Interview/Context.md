We use **Context API** in React to share data between components without passing props manually through every level.

Imagine this component structure:

```text
App
 ├── Navbar
 ├── Home
 │    └── Profile
 │         └── UserDetails
```

Suppose the username is stored in `App`, and `UserDetails` needs it.

Without Context API:

```text
App → Home → Profile → UserDetails
```

You must pass props through every component:

```jsx
<App user={user} />
<Home user={user} />
<Profile user={user} />
<UserDetails user={user} />
```

This becomes **prop drilling** — passing data through components that don't even use it.

With Context API:

```text
App
   ↓
UserContext Provider
   ↓
Any component can access user data
```

Example:

**Create context**

```jsx
const UserContext = React.createContext()
```

**Provide data**

```jsx
<UserContext.Provider value={{user}}>
    <Home />
</UserContext.Provider>
```

**Use data anywhere**

```jsx
const { user } = useContext(UserContext)
```

Benefits of Context API:

* Avoids prop drilling
* Makes state sharing easier
* Keeps code cleaner
* Any component can access common data
* Good for global data such as:

  * Login user information
  * Theme (dark/light mode)
  * Language settings
  * Authentication state
  * Cart items

For your login example:

```jsx
setUser({username,password})
```

Instead of sending `user` through many components:

```text
App → Login → Home → Profile → Dashboard
```

`Profile` directly gets it:

```jsx
const { user } = useContext(UserContext)
```

So the simple idea is:

**State = local data for one component**
**Context API = shared/global data for many components**
