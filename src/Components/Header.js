import React from 'react';
import '../App.css'


const Header = () => {
  return (

    <div className="ui secondary pointing menu header-color sideBySide" >
        <label className="header-label-start" style={{color:"orange",display: "flex",alignItems: "center"}}> <strong style={{fontSize:"1.1em",marginLeft:"0.2em"}}>"לעילוי נשמת "מרים בת נסריה</strong></label>
        <label className="header-label-end" style={{color:"orange" }}> <strong style={{marginRight:"0.2em", fontSize:"3em"}}>יזכור</strong></label>
    </div>
  );
};

export default Header;
