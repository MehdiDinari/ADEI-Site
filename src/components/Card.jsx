import React from "react";
import "../styles/Card.css";

const Card = ({ title, content, footer }) => {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            {content && <p className="card-content">{content}</p>}
            {footer && <footer className="card-footer">{footer}</footer>}
        </div>
    );
};

export default Card;