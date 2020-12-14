import React, { useState } from 'react';
import "../../css/services.css";

const Accordion = ({image, title, body}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="service_accordion">
            <div onClick={() => setIsOpen(!isOpen)} className={(isOpen ? "accordion_heading active" : "accordion_heading")}>
                <img src={image} alt="icon"/>
                <h3 className="accordion_title">{title}</h3>
                <span className={(isOpen ? "accordion_btn active" : "accordion_btn")}>&gt;</span>
            </div>
            {isOpen && (<div className="accordion_content">{body}</div>)}
        </div>
    )
}

export default Accordion;
