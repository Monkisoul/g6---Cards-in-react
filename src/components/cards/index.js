import { useState } from "react";

import "./styles.scss";

const Card = (props) => {
  const isNumber = !isNaN(props.number);
  const [isFlipped, setIsFlipped] = useState(props.flipped);
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className={["card", isFlipped ? "flipped" : "", props.symbol, props.number].filter(Boolean).join(" ") }
      number = {props.number}
    >
      <div className="container">
      <div className="back"></div>
        <div className="front">
          
          <div className="card-corner top-left">
            <div> {props.number}</div>
            <div className = "symbol"> {props.symbol}</div>
            
          </div>
          
          <div className="symbols">
            {props.number === "A" ? <div> {props.symbol}</div> : ""}

            {props.number === "K" || props.number === "J" || props.number === "Q" ? 
              <div className="image"></div> : ""
            }

            {isNumber &&
              new Array(parseInt(props.number))
                .fill(props.symbol)
                .map((cardSymbol, key) => (
                  <div key={key} className="cardsymbol">
                    {cardSymbol}
                  </div>
                ))}
          </div>
          <div className="card-corner bottom-right">
            <div>{props.number}</div>
            <div className = "symbol">{props.symbol}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
