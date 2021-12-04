import React, { useState } from "react";

function State() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1 style={{ color: color }}>Function Component | State</h1>
      <button onClick={() => setColor("blue")}>Button</button>
    </div>
  );
}

export default State;
