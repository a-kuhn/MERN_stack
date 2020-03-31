import React, { useState } from "react";

const Boxes = () => {
  const initialState = {
    color: "",
    size: ""
  };
  const [colorState, setColorState] = useState(initialState);
  const [boxesState, setBoxesState] = useState([]);

  return (
    <div>
      <div>
        <label className="mx-2 my-4">Color</label>
        <input
          type="text"
          name="color"
          onChange={e => {
            setColorState({ ...colorState, [e.target.name]: e.target.value });
          }}
          className="btn-light btn-outline-secondary"
        />
        <label className="mx-2 my-4">Size</label>
        <input
          type="text"
          name="size"
          onChange={e => {
            setColorState({ ...colorState, [e.target.name]: e.target.value });
          }}
          className="btn-light btn-outline-secondary"
        />
        <div
          name="add-btn"
          onClick={
            (console.log("boxesState: ", boxesState),
            console.log("colorState: ", colorState),
            () => setBoxesState([...boxesState, colorState]))
          }
          className="btn btn-sm btn-outline-secondary mx-2 my-4 px-3"
        >
          Add
        </div>
      </div>
      <div>
        {/* map over array of boxes */}
        {boxesState.map((box, i) => (
          <div
            style={{
              backgroundColor: box.color,
              height: box.size + "px",
              width: box.size + "px",
              display: "inline-block",
              margin: "10px"
            }}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
