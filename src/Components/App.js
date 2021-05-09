import React, {  useState } from 'react'
import kit from '../kit'
import Header from './Header'
import '../App.css'


const abc = { 'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9, 'י': 10, 'כ': 11, 'ך': 11, 'ל': 12, 'מ': 13, 'ם': 13, 'נ': 14, 'ן': 14, 'ס': 15, 'ע': 16, 'פ': 17, 'ף': 17, 'צ': 18, 'ץ': 18, 'ק': 19, 'ר': 20, 'ש': 21, 'ת': 22 }
const sof={"ץ":"צ","ם":"מ","ן":"נ","ף":"פ","ך":"כ"}


function App() {
  const [value, setValue] = useState("");
  const [valueToGo, setValueToGo] = useState("");
  const [checked, setChecked] = useState("");




  const renderKit = (perek) => {
    return (
      kit[perek].map(item => {
        return (
          <label style={{ lineHeight: "1.6" }}>
            {item}
          </label>
        );
      }
      )

    );
  }

  const renderperek = (perek) => {
    var perekToShow;
    if(sof[perek]!==undefined){
      perekToShow =sof[perek];
      }
      else{
        perekToShow=perek;
      }
    return (
      <div >
        <label style={{ display: "flex", justifyContent: "center" }}><strong>{perekToShow}</strong></label>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: "wrap" }}>
          {renderKit(abc[perek])}
        </div>
        <br></br>
      </div>

    );
  }
  const go = () => {
    if (checked)
      setValueToGo(value + "נשמה")
    else {
      setValueToGo(value)

    }
  }


  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <form onSubmit={x => { x.preventDefault(); go() }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="submit" />

            <input dir="rtl" value={value} placeholder="לדוג': משה בן עמרם" autoFocus onChange={e => setValue(e.target.value)} type="text" pattern="[\u0590-\u05FF ]{1,50}" title="אנא הקלד שם בעברית בלבד" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <br></br>
            <label>אותיות נשמה</label>
            <input type="checkbox" checked={checked} onChange={event => setChecked(event.target.checked)} />
          </div>
        </form>
        <br></br>


      </div>
      <div dir="rtl" style={{ display: "flex", flexDirection: "column", alignitems: "center" }} >
        {valueToGo.split(" ").join("").split("").map(letter => renderperek(letter))}
      </div>
    </div>
  );
}

export default App;
