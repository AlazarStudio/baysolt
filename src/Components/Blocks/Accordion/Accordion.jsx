import React, { useState } from "react";
import classes from "./Accordion.module.css";

function Accordion({ children, title, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.accordion}>
        <div className={classes.accordionHeader} onClick={toggle}>
          {title}
        </div>
        <div className={`${classes.accordionBody} ${isOpen ? `${classes.accordionBody_open}` : "closed"}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Accordion;
