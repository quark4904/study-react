import React from "react";

function PropsChild(props) {
  console.log(props);
  return (
    <div>
      {/* <h1 style={{ color: props.titleColor }}>Child Component</h1> */}
      {/* <button onClick={props.changeColor}>Button</button> */}
      <div>
        <span style={{ fontSize: 30, fontWeight: 700 }}>Child Component -</span>
        <span
          style={{ fontSize: 30, fontWeight: 700, color: props.fromColorData }}
        >
          {props.fromColorData}
        </span>
      </div>
    </div>
  );
}
export default PropsChild;
