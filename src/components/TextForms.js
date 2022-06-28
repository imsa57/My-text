import React, { useState } from 'react'

export default function TextForm(props) {

  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase!", "success")

  }
  const clickLoHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase!", "success")
  }

  const onChangeHandler = (event) => {
    setText(event.target.value);

  }

  const clickCopyText = () => {
    // let text = document.getElementById("myBox");
    // text.select()
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRange();
    props.showAlert("copy to clipboard!", "success")

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success")

  };

  const handleClearText = () => {
    setText("");
    props.showAlert("text cleared!", "success")

  };


  const [text, setText] = useState("");
  return (

    <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 2fr",  justifyContent:"center", overflowY:"hidden"}}>
      <div style={{alignSelf:"center"}}>
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "#232841", color: props.mode === "light" ? "black" : "white" }} onChange={onChangeHandler} rows="10"></textarea>
        </div>
        <button type="button" disabled={text.length === 0} onClick={clickUpHandler} className="btn btn-primary mx-1 my-1">Convert to uppercase</button>
        <button type="button" disabled={text.length === 0} onClick={clickLoHandler} className="btn btn-primary mx-1 my-1">Convert to lowercase</button>
        <button type="button" disabled={text.length === 0} onClick={clickCopyText} className="btn btn-primary mx-1 my-1">Copy Text</button>
        <button type="button" disabled={text.length === 0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove extra spaces</button>
        <button type="button" disabled={text.length === 0} onClick={handleClearText} className="btn btn-primary mx-1 my-1">Clear Text</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === "light" ? "black" : "white",textAlign:"center"}}>
        <h2>Your Summery</h2>
        <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> Charecter</p>
        <p><b>{.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> minutes for reading</p>
        <h2>Preview</h2>
        <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "#232841", color: props.mode === "light" ? "black" : "white",letterSpacing:"1px", fontWeight:"550"}} onChange={onChangeHandler} rows="14"></textarea>
      </div>
    </div>
  );
}
