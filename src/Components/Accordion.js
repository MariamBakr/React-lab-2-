import React, { useState } from "react";
function Accordion() {
     // State to show/hide accordion
  const [show, setShow] = useState(false);
  const handler = () => {
    setShow(!show); // Toggle accordion
  };
    return (
      <div className="Accordion">
           <div className="accordian-header" onClick={handler}>
          <div>Click to show</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
          <div className="accordian-body">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's ever since the 1500s,
            when an unknown printer took a galley of type standard dummy text
            and scrambled it to make a type specimen book.
          </div>
        )}
      </div>
    );
  }
  
  export default Accordion;
  