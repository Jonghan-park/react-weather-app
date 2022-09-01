import React from "react";
import axios from "axios";

function App() {
  const api = {
    key: "87e0929ac80376a13158f1a7657cd93d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
