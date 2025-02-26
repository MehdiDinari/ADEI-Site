import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Icônes sociales
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Section À propos */}
                <div className="footer-section">
                    <h3>À propos de l'ADEI</h3>
                    <p>
                        L'Association des Élèves (ADEI) œuvre pour promouvoir l'engagement
                        étudiant et organiser des événements culturels, sportifs et
                        académiques.
                    </p>
                </div>

                {/* Section Liens rapides */}
                <div className="footer-section">
                    <h3>Liens rapides</h3>
                    <ul>
                        <li>
                            <a href="/about">À propos</a>
                        </li>
                        <li>
                            <a href="/events">Événements</a>
                        </li>
                        <li>
                            <a href="/clubs">Clubs</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Section Contact */}
                <div className="footer-section">
                    <h3>Contactez-nous</h3>
                    <p>Email : contact@adei.com</p>
                    <p>Téléphone : +123 456 789</p>
                    <p>Adresse : 123 Rue de l'École, Ville, Pays</p>
                </div>

                {/* Section Réseaux sociaux */}
                <div className="footer-section">
                    <h3>Suivez-nous</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ADEI. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;