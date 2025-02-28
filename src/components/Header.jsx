import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="home">
            {/* Section Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Bienvenue à l'ADEI</h1>
                    <p>Votre passerelle vers l'innovation et la collaboration.</p>
                    <Link to="/explore" className="cta-button">
                        Explorer nos projets
                    </Link>
                </div>
            </section>

            {/* Section Mission */}
            <section className="mission-section">
                <h2>Notre Mission</h2>
                <p>
                    L'ADEI est dédiée à inspirer, connecter et soutenir les étudiants dans leurs
                    projets innovants. Nous croyons en la puissance de la collaboration pour
                    façonner l'avenir.
                </p>
            </section>

            {/* Section Activités */}
            <section className="activities-section">
                <h2>Ce que nous faisons</h2>
                <div className="activity-cards">
                    <div className="card">
                        <h3>Ateliers</h3>
                        <p>
                            Des sessions pratiques pour développer vos compétences et explorer de
                            nouvelles technologies.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Réseautage</h3>
                        <p>
                            Rencontrez des professionnels et des passionnés pour élargir votre
                            réseau.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Projets Innovants</h3>
                        <p>
                            Collaborez sur des projets qui ont un impact réel dans votre communauté.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Inspiration */}
            <section className="inspiration-section">
                <h2>Inspirez-vous</h2>
                <div className="quote">
                    <p>
                        "L'innovation distingue un leader d'un suiveur." <br /> – Steve Jobs
                    </p>
                </div>
            </section>

            {/* Section CTA */}
            <section className="cta-section">
                <h2>Prêt à innover avec nous ?</h2>
                <p>
                    Rejoignez une communauté qui repousse les limites de la créativité et de
                    l'innovation.
                </p>
                <Link to="/get-started" className="cta-button">
                    Commencez votre voyage
                </Link>
            </section>
        </div>
    );
};

export default Header;