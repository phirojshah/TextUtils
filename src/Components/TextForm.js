import React, { useState } from 'react'



export default function TextForm(props) {

    //UpperCase Conversion
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }

    //LowerCase Conversion
    const handLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerercase","Success");

    }

    //Clear Text
    const handClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","Success");

    }

    //Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra-Spaces has been removed","Success");

    }

    //Copy Text
    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to the clipboard","Success");

    }

    //Event handling
    const handleOnChange = (event) => {
        //console.log("onchange");
        setText(event.target.value);
    }

    //UseState Hooks
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#3e3e3e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>

                </div>
                <button onClick={handleUpClick} className='btn btn-primary'>
                    Convert to Uppercase</button>
                <button onClick={handLoClick} className='btn btn-primary mx-1'>
                    Convert to Lowerrcase</button>
                <button onClick={handClearClick} className='btn btn-primary mx-1'>
                    Clear Text</button>
                <button onClick={handleExtraSpaces} className='btn btn-primary mx-1'>
                    Remove Extra Spaces</button>
                <button onClick={handleCopyText} className='btn btn-primary mx-1'>
                    Copy Text</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter somthing in the box to preview it'}</p>
                <p>{text.length>0?text.length*0.004:" "}</p>
            </div>
        </>

    )
}
