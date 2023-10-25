import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    console.log("its changing");
    setText(event.target.value);
  };
  const handleUpperCase = () => {
    console.log("submitting the event ");
    let changeText = text.toUpperCase();
    setText(changeText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLowerCase = () => {
    let changeText = text.toLocaleLowerCase();
    setText(changeText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleClearText = () => {
    console.log("clear clicked");
    setText("");
    props.showAlert("converted to cleared", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="form"
            rows="8"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpperCase}
          >
            change to uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowerCase}
          >
            change to lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearText}
          >
            clear
          </button>
        </div>
        <div className="container">
          <h2>your text Summary</h2>
          <p>
            {/* //need to write a logic to keep the value to 0 */}
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length}character
          </p>
          {/* //to check how long does it takes to read the text  */}
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>preview</h2>
          <p>
            {text.length > 0
              ? text
              : "enter something in the textbox above to preview here.."}
          </p>
        </div>
      </div>
    </>
  );
}
