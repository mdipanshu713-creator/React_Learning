import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div style={{ padding: "20px" ,}}>
      <h1>Password Generator</h1>

      <input
        type="text"
        value={password}
        readOnly
        placeholder="Generated Password"
        style={{ width: "300px", padding: "10px" }}
      />

      <br />
      <br />

      <button onClick={passwordGenerator}>
        Generate Password
      </button>

      <br />
      <br />

      <label>
        Length: {length}
      </label>
      <br />
      <input
        type="range"
        min="4"
        max="50"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        Include Numbers
      </label>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        Include Special Characters
      </label>
    </div>
  );
}

export default App;