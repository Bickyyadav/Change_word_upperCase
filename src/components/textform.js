import React, { useState } from "react";

function Textform(props) {
  const handleupcase = () => {
    console.log("uppercase was clicked");
    let newText = Text.toUpperCase();
    setText(newText);


  };


  // ------------------------------- we have used unchage function in down os we use this 
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);

  };

  const [Text, setText] = useState("Enter text here");
  // setText("bicky yadav")  ------------------ this is the write way to change the tetxt
  //text = "bicky yadav" ------------------- this is  wrong way to chagne the text

  return (
    <>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <label htmlFor="Mybox" className="form-label">
          {" "}
          Example text area
        </label>
        <textarea
          className="form-control"
          value={Text}        //--------------------------by this reason only we have writting text inside the box
          onChange={handleOnChange}
          id="Mybox"
          rows="15"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupcase}>
        convert to upperCase
      </button>
    </>
  );
}

export default Textform;
