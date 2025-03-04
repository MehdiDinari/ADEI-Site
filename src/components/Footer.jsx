import React, { useState } from 'react';
// Assurez-vous d'importer le fichier CSS
import '../styles/Footer.css';

const Footer = () => {
    const [hoverSection, setHoverSection] = useState(null);

    // Animation pour les icônes sociales
    const SocialIcon = ({ children, href, label }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <a
                href={href}
                aria-label={label}
                className={`social-icon ${isHovered ? 'social-icon-hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </a>
        );
    };

    // Effet pour les liens
    const AnimatedLink = ({ href, children }) => {
        return (
            <a
                href={href}
                className="animated-link"
            >
                {children}
                <span className="animated-link-underline"></span>
            </a>
        );
    };

    return (
        <footer className="footer">
            {/* Vague décorative en haut du footer */}
            <div className="wave-container">
                <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        className="wave-path"
                    ></path>
                </svg>
            </div>

            <div className="footer-main">
                <div className="footer-sections">
                    {/* Section À propos */}
                    <div
                        className={`footer-section ${hoverSection === 'about' ? 'section-hovered' : ''}`}
                        onMouseEnter={() => setHoverSection('about')}
                        onMouseLeave={() => setHoverSection(null)}
                    >
                        <h3 className="section-title">
                            À propos de l'ADEI
                            <span className={`title-underline ${hoverSection === 'about' ? 'underline-visible' : ''}`}></span>
                        </h3>
                        <p className="section-text">
                            L'Association des Élèves (ADEI) œuvre pour promouvoir l'engagement
                            étudiant.
                        </p>
                    </div>

                    {/* Section Liens rapides */}
                    <div
                        className={`footer-section ${hoverSection === 'links' ? 'section-hovered' : ''}`}
                        onMouseEnter={() => setHoverSection('links')}
                        onMouseLeave={() => setHoverSection(null)}
                    >
                        <h3 className="section-title">
                            Liens rapides
                            <span className={`title-underline ${hoverSection === 'links' ? 'underline-visible' : ''}`}></span>
                        </h3>
                        <div className="links-grid">
                            <div className="link-item">
                                <AnimatedLink href="/about">À propos</AnimatedLink>
                            </div>
                            <div className="link-item">
                                <AnimatedLink href="/events">Événements</AnimatedLink>
                            </div>
                            <div className="link-item">
                                <AnimatedLink href="/clubs">Clubs</AnimatedLink>
                            </div>
                            <div className="link-item">
                                <AnimatedLink href="/contact">Contact</AnimatedLink>
                            </div>
                        </div>
                    </div>

                    {/* Section Contact */}
                    <div
                        className={`footer-section ${hoverSection === 'contact' ? 'section-hovered' : ''}`}
                        onMouseEnter={() => setHoverSection('contact')}
                        onMouseLeave={() => setHoverSection(null)}
                    >
                        <h3 className="section-title">
                            Contactez-nous
                            <span className={`title-underline ${hoverSection === 'contact' ? 'underline-visible' : ''}`}></span>
                        </h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                contact@adei.com
                            </div>
                            <div className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                +123 456 789
                            </div>
                        </div>
                    </div>

                    {/* Section Adresse */}
                    <div
                        className={`footer-section ${hoverSection === 'address' ? 'section-hovered' : ''}`}
                        onMouseEnter={() => setHoverSection('address')}
                        onMouseLeave={() => setHoverSection(null)}
                    >
                        <h3 className="section-title">
                            Adresse
                            <span className={`title-underline ${hoverSection === 'address' ? 'underline-visible' : ''}`}></span>
                        </h3>
                        <div className="address-info">
                            <svg className="address-icon" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            123 Rue de l'École, Ville
                        </div>
                    </div>

                    {/* Section Réseaux sociaux */}
                    <div
                        className={`footer-section ${hoverSection === 'social' ? 'section-hovered' : ''}`}
                        onMouseEnter={() => setHoverSection('social')}
                        onMouseLeave={() => setHoverSection(null)}
                    >
                        <h3 className="section-title">
                            Suivez-nous
                            <span className={`title-underline ${hoverSection === 'social' ? 'underline-visible' : ''}`}></span>
                        </h3>
                        <div className="social-icons">
                            <SocialIcon href="https://facebook.com" label="Facebook">
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://twitter.com" label="Twitter">
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://instagram.com" label="Instagram">
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://linkedin.com" label="LinkedIn">
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                                </svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright-section">
                <div className="copyright-container">
                    <div className="copyright-content">
                        <div className="copyright-text">
                            &copy; {new Date().getFullYear()} ADEI. Tous droits réservés.
                        </div>
                        <div className="legal-links">
                            <AnimatedLink href="/privacy">Confidentialité</AnimatedLink>
                            <AnimatedLink href="/terms">Conditions</AnimatedLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;