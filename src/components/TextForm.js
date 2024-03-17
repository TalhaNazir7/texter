import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange=(event)=>{
        setText(event.target.value)

    }

    const upCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const lowCase=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
    }
    
    const clearText=()=>{
      let newtext=("");
      setText(newtext);
    }

    const copyclipboard=()=>{
      navigator.clipboard.writeText(text);
    }

    const removeExtraSpaces=()=>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "))

    }
    

  return (
  <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3" >
    <textarea className="form-control" id="myform" value={text} onChange={handleOnChange} 
    style={{backgroundColor: props.mode==='light'?'white':'#404040', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button className='btn btn-secondary' onClick={upCase}>Convert to uppercase</button>
    <button className='btn btn-secondary mx-2' onClick={lowCase}>Convert to lowercase</button>
    <button className='btn btn-secondary mx-2' onClick={clearText}>Clear text</button>
    <button className='btn btn-secondary mx-2' onClick={copyclipboard}>Copy to clipboard</button>
    <button className='btn btn-secondary mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
  </div>

  <div className='container my-3'style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>Characters: {text.length}</p>
    <p>Words: {text.split(/s+/).filter((element)=>{return element.length!==0}).length}</p>
    <p>Minutes to read: {0.008 * text.split(" ").length}</p>

    <h2>Preview</h2>
    {text}
  </div>
</>
  )
}
