import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about">
            <h1>À propos de l'ADEI</h1>
            <section>
                <h2>Notre histoire</h2>
                <p>
                    L'ADEI a été fondée en 20XX pour soutenir les élèves dans leurs projets académiques et
                    extra-scolaires. Depuis, nous avons organisé de nombreux événements et activités pour
                    renforcer la communauté étudiante.
                </p>
            </section>
            <section>
                <h2>Nos objectifs</h2>
                <ul>
                    <li>Promouvoir l'engagement étudiant.</li>
                    <li>Organiser des événements culturels et sportifs.</li>
                    <li>Offrir un soutien académique et professionnel.</li>
                </ul>
            </section>
            <section>
                <h2>Notre équipe</h2>
                <p>
                    L'équipe de l'ADEI est composée de bénévoles dévoués, dont des élèves, des anciens élèves
                    et des professeurs.
                </p>
            </section>
        </div>
    );
};

export default About;