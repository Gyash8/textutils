import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Clicked");
    let newText = text.toUpperCase();
    props.showAlert("Converted to UpperCase","success")
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    console.log("Clicked");
    let newText = " ";
    setText(newText);
    props.showAlert("Deleted","success")
  };
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your Text here");
  return (
    <>
      <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters and it
          will take {text.split(" ").length * 0.008} mins to read
        </p>
      </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}
