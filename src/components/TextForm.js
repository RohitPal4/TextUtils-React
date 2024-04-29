import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "success");

  };

  const handleTcClick = () => {
    const newtext = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(newtext.join(" "));
    props.showAlert("Converted to Title Case", "success");

  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "success");

  };

  const handleCopy = () => {
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Copied to Clipboard", "success");

  };

  const handleExtraSpace = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Space Removed", "success");

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Calculate word count, character count, and reading time
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;
  const minutesRead = wordCount ? 0.008 * wordCount : 0;

  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#364859' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTcClick}>
          Title Case
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {wordCount} words and {characterCount} characters
        </p>
        <p>{minutesRead.toFixed(2)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
      </div>
    </div>
  );
}

