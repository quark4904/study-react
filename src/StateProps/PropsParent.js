import React, { useState } from "react";
import PropsChild from "./PropsChild";
import ColorData from "./ColorData";

function PropsParent() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>Parent Component</h1>
      <ul style={{ all: "unset" }}>
        {ColorData.map((color) => {
          return <PropsChild fromColorData={color.colorName} />;
        })}
        {/* <PropsChild titleColor={color} changeColor={() => setColor("blue")} /> */}
      </ul>
    </div>
  );
}

export default PropsParent;
