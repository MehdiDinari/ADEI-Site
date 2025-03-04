import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Award, MapPin, BookOpen, Users, Heart, GitBranch, Zap } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    // Initialize refs
    useEffect(() => {
        sectionRefs.current = Array(5).fill().map((_, i) => sectionRefs.current[i] || React.createRef());
    }, []);

    // Handle scroll events and animations
    useEffect(() => {
        const handleScroll = () => {
            // Determine which section is in view
            const current = sectionRefs.current.findIndex((ref) => {
                if (!ref.current) return false;
                const rect = ref.current.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });

            if (current !== -1 && current !== activeSection) {
                setActiveSection(current);
            }

            // Animate sections when they enter viewport
            sectionRefs.current.forEach((ref) => {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

                if (isInView) {
                    ref.current.querySelector('.section-content').classList.add('animated');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to check initial positions
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    // Navigation handling
    const scrollToSection = (index) => {
        setActiveSection(index);
        if (sectionRefs.current[index] && sectionRefs.current[index].current) {
            sectionRefs.current[index].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="about-page">
            {/* Hero Section with Parallax */}
            <div className="hero-section">
                <div className="overlay"></div>

                {/* Animated background pattern */}
                <div className="background-pattern">
                    <svg className="pattern-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <circle cx="5" cy="5" r="1" fill="rgba(255, 255, 255, 0.2)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Hero content */}
                <div className="hero-content">
                    <div className="icon-container">
                        <Award className="award-icon" size={80} />
                    </div>
                    <h1 className="hero-title">
                        ADEI
                    </h1>
                    <p className="hero-subtitle">
                        Association des Élèves Ingénieurs
                    </p>
                    <div className="nav-buttons">
                        {["Objectifs", "Fès", "USMBA", "ENSA Fès", "ADEI"].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(index)}
                                className={`nav-button ${activeSection === index ? "active" : ""}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="scroll-indicator" onClick={() => scrollToSection(0)}>
                        <ChevronDown className="chevron-icon" size={36} />
                    </div>
                </div>
            </div>

            {/* Section 1: Objectifs */}
            <div id="section-0" ref={sectionRefs.current[0]} className="section-container">
                <div className="section-content">
                    <div className="section-flex">
                        <div className="icon-column">
                            <div className="icon-circle objectives-icon">
                                <Heart className="section-icon" size={40} />
                            </div>
                        </div>
                        <div className="text-column">
                            <h2 className="section-title objectives-title">
                                Objectifs de l'ADEI
                            </h2>
                            <p className="section-text">
                                Notre association d'étudiants a pour objectif l'unification des élèves ingénieurs, tout en facilitant leurs déplacements et en organisant des événements éducatifs annuels. Pour atteindre cet objectif, nous comptons sur le soutien des entreprises engagées dans le bien-être et le développement des populations, et ayant une vision à long terme du sponsoring, bénéfique pour la formation des futurs cadres dans la société en général, et dans les entreprises en particulier, telles que la vôtre.
                            </p>
                            <p className="section-text">
                                Comme vous le savez, ces activités engendrent des coûts, c'est pourquoi nous sommes actuellement à la recherche de sponsors pour les mener à bien. Nous sommes à votre entière disposition pour convenir d'une rencontre à une date de votre choix, afin de discuter plus en détail d'une éventuelle collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Fès */}
            <div id="section-1" ref={sectionRefs.current[1]} className="section-container fes-section">
                <div className="section-content">
                    <div className="section-flex">
                        <div className="text-column order-2">
                            <h2 className="section-title fes-title">
                                Fès, une ville impériale
                            </h2>
                            <p className="section-text">
                                Nichée au cœur du Maroc, Fès, l'une des quatre villes impériales du pays, est un joyau vibrant où l'histoire et la culture explosent à chaque coin de rue. Fondée au VIIIe siècle, la ville se drape fièrement du manteau de son passé millénaire. Son cœur battant est Fès el-Bali, un labyrinthe médiéval classé au patrimoine mondial de l'UNESCO et le plus grand quartier piétonnier du monde.
                            </p>
                            <p className="section-text">
                                Imaginez-vous déambulant dans des ruelles étroites et sinueuses, les murs ocres baignés par le soleil, tandis que des arcs en fer à cheval donnent accès à des riads secrets et des boutiques d'artisans débordantes de babouches colorées, de tapis berbères et d'épices aux parfums envoûtants. L'air lui-même raconte une histoire, imprégné des effluves des tanneries traditionnelles de Chouara, où des cuves colorées témoignent d'un savoir-faire ancestral transmis de génération en génération.
                            </p>
                            <p className="section-text">
                                Au détour d'une rue, vous tomberez nez-à-nez avec la majestueuse Université Al-Qarawiyyin, fondée en 859 et considérée comme la plus ancienne université en activité continue au monde. Fès est un kaléidoscope pour les sens, une ville où le passé et le présent se côtoient en parfaite harmonie, offrant une expérience inoubliable à tous ceux qui osent s'y perdre.
                            </p>
                        </div>
                        <div className="icon-column order-1">
                            <div className="icon-position">
                                <div className="icon-circle fes-icon">
                                    <MapPin className="section-icon" size={48} />
                                </div>
                                <svg className="star-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: USMBA */}
            <div id="section-2" ref={sectionRefs.current[2]} className="section-container">
                <div className="section-content">
                    <div className="section-flex">
                        <div className="icon-column">
                            <div className="icon-circle usmba-icon">
                                <BookOpen className="section-icon" size={48} />
                            </div>
                        </div>
                        <div className="text-column">
                            <h2 className="section-title usmba-title">
                                L'Université Sidi Mohamed Ben Abdellah (USMBA)
                            </h2>
                            <p className="section-text">
                                L'Université Sidi Mohamed Ben Abdellah (USMBA) est une université publique marocaine située à Fès, l'une des villes impériales du Maroc. Fondée en 1975, elle est l'une des plus grandes universités du pays avec plus de 40 000 étudiants et 1 500 enseignants-chercheurs. L'USMBA est composée de 12 établissements d'enseignement supérieur, notamment :
                            </p>
                            <div className="grid-list">
                                {[
                                    "École nationale des sciences appliquées (ENSA)",
                                    "École Nationale de Commerce et de Gestion (ENCG)",
                                    "Faculté des Sciences Juridiques, Économiques et Sociales",
                                    "Faculté des Lettres et des Sciences Humaines",
                                    "Faculté des Arts et des Sciences de l'Information et de la Communication"
                                ].map((item, i) => (
                                    <div key={i} className="list-item">
                                        <div className="list-dot usmba-dot"></div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="section-text">
                                L'USMBA se concentre sur la formation, la recherche, l'innovation et le développement territorial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: ENSA Fès */}
            <div id="section-3" ref={sectionRefs.current[3]} className="section-container ensa-section">
                <div className="section-content">
                    <div className="section-flex">
                        <div className="text-column order-2">
                            <h2 className="section-title ensa-title">
                                L'École Nationale Supérieure d'Ingénieurs de Fès (ENSA Fès)
                            </h2>
                            <p className="section-text">
                                L'École Nationale Supérieure d'Ingénieurs de Fès (ENSA Fès) est une grande école d'ingénieurs marocaine publique située à Fès, l'une des villes impériales du Maroc. Créée en 2005, elle est rattachée à l'Université Sidi Mohamed Ben Abdellah (USMBA). L'ENSA Fès est membre de la Conférence des grandes Écoles (CGE) et est reconnue pour la qualité de sa formation et ses liens étroits avec le monde socio-économique.
                            </p>
                            <p className="section-text">
                                Parmi les atouts de l'ENSA Fès, on trouve :
                            </p>
                            <div className="grid-list">
                                {[
                                    "Une formation d'ingénieurs de haut niveau",
                                    "Un environnement pédagogique et scientifique de qualité",
                                    "Des liens étroits avec le monde socio-économique",
                                    "Une ouverture à l'international"
                                ].map((item, i) => (
                                    <div key={i} className="list-item">
                                        <div className="list-dot ensa-dot"></div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="section-text">
                                L'ENSA Fès compte plus de 3 000 étudiants, plus de 200 enseignants-chercheurs, plus de 50 laboratoires de recherche et plus de 100 partenariats avec des entreprises et des institutions. Son taux d'insertion professionnelle dépasse les 90%.
                            </p>
                        </div>
                        <div className="icon-column order-1">
                            <div className="icon-circle ensa-icon">
                                <GitBranch className="section-icon" size={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: ADEI */}
            <div id="section-4" ref={sectionRefs.current[4]} className="section-container">
                <div className="section-content">
                    <div className="center-content">
                        <div className="icon-center">
                            <div className="icon-circle adei-icon">
                                <Users className="section-icon" size={48} />
                            </div>
                        </div>
                        <div className="center-text">
                            <h2 className="section-title adei-title">
                                L'ADEI, Association des Élèves Ingénieurs
                            </h2>
                            <p className="section-text">
                                L'ADEI, Association des Élèves Ingénieurs, incarne l'esprit de collaboration et de soutien au sein de l'ENSAF. En tant qu'association à but non lucratif, elle s'engage à faciliter la communication entre les élèves et l'administration, tout en veillant à répondre aux besoins de chacun. Gérée avec dévouement par des étudiants de l'ENSAF, son objectif principal est d'orchestrer et de coordonner les activités parascolaires, enrichissant ainsi l'expérience éducative de tous les membres de la communauté estudiantine.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="stats-grid">
                        {[
                            { number: "3000+", label: "Étudiants" },
                            { number: "50+", label: "Événements" },
                            { number: "25+", label: "Projets" },
                            { number: "10+", label: "Membres" }
                        ].map((stat, i) => (
                            <div key={i} className="stat-card">
                                <div className="stat-number">
                                    {stat.number}
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <div className="cta-content">
                    <Zap className="zap-icon" size={56} />
                    <h2 className="cta-title">Rejoignez l'aventure ADEI</h2>
                    <p className="cta-text">
                        Participez à nos événements, devenez membre ou partenaire, et contribuez à façonner l'avenir de l'ingénierie au Maroc.
                    </p>
                    <div className="cta-buttons">
                        <button className="button secondary-button">
                            Nous contacter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;