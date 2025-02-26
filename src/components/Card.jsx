import React from "react";
import '../styles/Card.css';

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h2>{title}</h2> {/* Affiche le titre du club */}
            <div className="card-content">
                {content} {/* Affiche le contenu */}
            </div>
        </div>
    );
};

export default Card;