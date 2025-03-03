import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    // États pour les animations
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    // Références pour l'animation
    const heroRef = useRef(null);
    const missionRef = useRef(null);
    const activitiesRef = useRef(null);
    const inspirationRef = useRef(null);
    const ctaRef = useRef(null);

    // Animation au chargement
    useEffect(() => {
        setIsVisible(true);

        // Animation des particules pour la section hero
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Configuration des particules
        const particlesArray = [];
        const numberOfParticles = 50;

        // Création de la classe Particle
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 1;
                this.speedY = (Math.random() - 0.5) * 1;
                this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialisation des particules
        function init() {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        // Animation des particules
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }

        init();
        animate();

        // Observer pour les animations au défilement
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');

                    // Mettre à jour la section active
                    if (entry.target === heroRef.current) setActiveSection(0);
                    else if (entry.target === missionRef.current) setActiveSection(1);
                    else if (entry.target === activitiesRef.current) setActiveSection(2);
                    else if (entry.target === inspirationRef.current) setActiveSection(3);
                    else if (entry.target === ctaRef.current) setActiveSection(4);
                }
            });
        }, { threshold: 0.3 });

        // Observer chaque section
        if (heroRef.current) observer.observe(heroRef.current);
        if (missionRef.current) observer.observe(missionRef.current);
        if (activitiesRef.current) observer.observe(activitiesRef.current);
        if (inspirationRef.current) observer.observe(inspirationRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home">
            {/* Indicateur de progression */}
            <div className="scroll-progress">
                <div className="progress-bar" style={{ width: `${(activeSection + 1) * 20}%` }}></div>
                <div className="progress-steps">
                    {[0, 1, 2, 3, 4].map((step) => (
                        <div
                            key={step}
                            className={`progress-step ${activeSection >= step ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Section Hero avec animation de particules */}
            <section ref={heroRef} className={`hero-section ${isVisible ? 'visible' : ''}`}>
                <canvas id="particles-canvas" className="particles-canvas"></canvas>
                <div className="hero-overlay"></div>

                {/* Formes géométriques simplifiées */}
                <div className="animated-shapes">
                    <div className="shape circle-shape"></div>
                </div>

                <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
                    <span className="badge">Association des Étudiants Innovants</span>
                    <h1 className="title-animation">
                        <span className="word">Bienvenue</span>
                        <span className="word">à</span>
                        <span className="word">l'<span className="text-highlight">ADEI</span></span>
                    </h1>
                    <p className="subtitle-animation">
                        Votre passerelle vers l'innovation et la collaboration.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/explore" className="cta-button primary pulse">
                            <span>Explorer nos projets</span>
                            <div className="arrow-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                          stroke="currentColor" strokeWidth="3"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="button-effect"></div>
                        </Link>
                        <Link to="/about" className="cta-button secondary">
                            <span>En savoir plus</span>
                            <div className="button-effect"></div>
                        </Link>
                    </div>
                </div>

                <div className="scroll-down-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div className="arrows">
                        <span className="arrow-down"></span>
                        <span className="arrow-down"></span>
                        <span className="arrow-down"></span>
                    </div>
                </div>

                {/* La vague a été retirée comme demandé */}
            </section>

            {/* Section Mission */}
            <section ref={missionRef} className="mission-section">
                <div className="section-background">
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>
                </div>

                <h2 className="section-title fade-up">
                    <span className="title-decoration"></span>
                    Notre Mission
                </h2>

                <p className="mission-text fade-up">
                    L'ADEI est dédiée à <span className="text-highlight">inspirer</span>,
                    <span className="text-highlight">connecter</span> et
                    <span className="text-highlight">soutenir</span> les étudiants dans leurs
                    projets innovants. Nous croyons en la puissance de la collaboration pour
                    façonner l'avenir.
                </p>

                <div className="mission-values">
                    <div className="mission-card fade-up delay-1">
                        <div className="card-front">
                            <div className="icon-container">
                                <div className="icon innovation-icon"></div>
                            </div>
                            <h3>Innovation</h3>
                        </div>
                        <div className="card-back">
                            <p>Explorez de nouvelles frontières et repoussez les limites</p>
                        </div>
                    </div>

                    <div className="mission-card fade-up delay-2">
                        <div className="card-front">
                            <div className="icon-container">
                                <div className="icon collaboration-icon"></div>
                            </div>
                            <h3>Collaboration</h3>
                        </div>
                        <div className="card-back">
                            <p>Ensemble, construisons un avenir meilleur</p>
                        </div>
                    </div>

                    <div className="mission-card fade-up delay-3">
                        <div className="card-front">
                            <div className="icon-container">
                                <div className="icon impact-icon"></div>
                            </div>
                            <h3>Impact</h3>
                        </div>
                        <div className="card-back">
                            <p>Créez un changement positif dans la société</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Activités */}
            <section ref={activitiesRef} className="activities-section">
                <div className="section-background">
                    <div className="floating-element elem-1"></div>
                </div>

                <h2 className="section-title fade-up">
                    <span className="title-decoration"></span>
                    Ce que nous faisons
                </h2>

                <div className="activity-cards">
                    <div className="activity-card fade-up delay-1">
                        <div className="card-header">
                            <div className="card-icon workshops-icon"></div>
                            <h3>Ateliers</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                Des sessions pratiques pour développer vos compétences et explorer de
                                nouvelles technologies.
                            </p>
                            <Link to="/workshops" className="card-link">
                                <span>Voir nos ateliers</span>
                                <div className="arrow-container">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                              stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="card-shine"></div>
                    </div>

                    <div className="activity-card fade-up delay-2">
                        <div className="card-header">
                            <div className="card-icon networking-icon"></div>
                            <h3>Réseautage</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                Rencontrez des professionnels et des passionnés pour élargir votre
                                réseau.
                            </p>
                            <Link to="/networking" className="card-link">
                                <span>Voir nos événements</span>
                                <div className="arrow-container">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                              stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="card-shine"></div>
                    </div>

                    <div className="activity-card fade-up delay-3">
                        <div className="card-header">
                            <div className="card-icon projects-icon"></div>
                            <h3>Projets Innovants</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                Collaborez sur des projets qui ont un impact réel dans votre communauté.
                            </p>
                            <Link to="/projects" className="card-link">
                                <span>Voir nos projets</span>
                                <div className="arrow-container">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                              stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="card-shine"></div>
                    </div>
                </div>
            </section>

            {/* Section Inspiration */}
            <section ref={inspirationRef} className="inspiration-section">
                <div className="inspiration-overlay"></div>

                <h2 className="section-title light fade-up">
                    <span className="title-decoration"></span>
                    Inspirez-vous
                </h2>

                <div className="quote-container fade-up">
                    <div className="quote-icon">"</div>
                    <div className="quote-content">
                        <p className="quote-text">
                            L'innovation distingue un leader d'un suiveur.
                        </p>
                        <div className="quote-author">– Steve Jobs</div>
                    </div>
                </div>

                <div className="inspiration-particles">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} className="particle"></div>
                    ))}
                </div>
            </section>

            {/* Section CTA */}
            <section ref={ctaRef} className="cta-section">
                <div className="cta-background">
                    <div className="cta-shape shape-1"></div>
                    <div className="cta-shape shape-2"></div>
                    <div className="cta-shape shape-3"></div>
                </div>

                <div className="cta-content fade-up">
                    <h2 className="cta-title">Prêt à innover avec nous ?</h2>
                    <p className="cta-text">
                        Rejoignez une communauté qui repousse les limites de la créativité et de
                        l'innovation.
                    </p>
                    <Link to="/get-started" className="cta-button primary animated">
                        <span>Commencez votre voyage</span>
                        <div className="arrow-icon large">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                      stroke="currentColor" strokeWidth="3"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="button-effect"></div>
                    </Link>
                </div>

                <div className="cta-particles">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <div key={index} className="cta-particle"></div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Header;