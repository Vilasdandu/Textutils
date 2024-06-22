import React,{useState} from 'react';

export default function TextForm(props) {
    const handleupclick=()=>{
        console.log("on click");
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to upper case","success");
    }
    const handleloclick=()=>{
        console.log("on click");
        let newtext=Text.toLowerCase();
        setText(newtext)
        props.showAlert("converting to lower case","success");

    }
    const handleclearclick=()=>{
        console.log("on click");
        let newtext="";
        setText(newtext)
        props.showAlert("Text cleared","success");

    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const handlecopy=()=>{
      // console.log(" i am copy");
      var text=document.getElementById("mybox");
      text.select();
      // text.setSelectionRange();
      // navigator.clipboard.writeText(text.value);
      navigator.clipboard.writeText(text.value).then(() => {
        console.log("Text copied to clipboard");
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
      props.showAlert("copied to clip board","success");

    }
    const handleExtraspace=()=>{
      let newtext=Text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Removed extra spaces","success");



    }
  const [Text, setText] = useState("");
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor :props.mode==='dark'?'white':'grey'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraspace}>remove extra space</button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==='light'?'grey':'white'}}>
        <h2>your text summary</h2>
        <p>{Text.split(" ").length}words,{Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{Text.length>0?Text:"enter your text to preview it it here"}</p>
    </div>
    </>
  );
}
