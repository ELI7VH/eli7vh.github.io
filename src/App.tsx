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
        <div>this is some other shit</div>
      </header>
    </div>
  );
}

export default App;
