import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    console.log("Loggin In!");
    setLoggedIn(loggedIn ? false : true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>This is my website</div>
        <div>Click this button to Log {loggedIn ? "out" : "in"}!</div>
        <div>
          <button onClick={handleClick}>Log {loggedIn ? "Out" : "In"}!</button>
        </div>
        <div style={{ color: loggedIn ? "#0f0" : "#f00" }}>
          Logged in? {loggedIn ? "Yaaa!" : "No way!"}
        </div>
      </header>
    </div>
  );
}

export default App;
