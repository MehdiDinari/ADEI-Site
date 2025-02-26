import React from "react";
import Card from "../components/Card";
import '../styles/Clubs.css'

const Clubs = () => {
    const clubs = [
        { id: 1, name: "Club de Robotique", description: "Explorez la technologie et la programmation." },
        { id: 2, name: "Club de Théâtre", description: "Développez vos talents d'acteur." },
        { id: 3, name: "Club de Football", description: "Rejoignez notre équipe de football." },
    ];

    return (
        <div className="clubs">
            <h1>Nos Clubs</h1>
            <div className="club-list">
                {clubs.map((club) => (
                    <Card key={club.id} title={club.name} content={club.description} />
                ))}
            </div>
        </div>
    );
};

export default Clubs;