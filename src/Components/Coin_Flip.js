import React, { useState } from "react";
import Heads from "../Assets/Heads.jpeg"
import Tails from "../Assets/Tails.jpeg"
import '../Coin_Flip.css'

function Coin_Flip() {
    const [face,Setface]= useState(Heads)
    const coin= ()=>{
        let f= Math.floor(Math.random()*2)+1
        switch (f){
            case 1: Setface(Heads)
                    break;
            case 2: Setface(Tails)
                    break;
            default: Setface(Heads)
        }
    }
  return (
    <div className="Coin_Flip">
        <button className="btn" onClick={coin}>Flip a Coin</button>
        <img className="img" src={face} alt="Coin" />
    </div>
  );
}

export default Coin_Flip;